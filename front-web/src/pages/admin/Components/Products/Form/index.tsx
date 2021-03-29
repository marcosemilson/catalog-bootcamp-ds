import React, { useEffect, useState } from 'react';
import { useForm, Controller } from 'react-hook-form';
import { toast } from 'react-toastify';
import Select from 'react-select';
import { useHistory, useParams } from 'react-router';
import { makePrivateRequest, makeRequest } from 'core/utils/request';
import { Category } from 'core/types/Product';
import BaseForm from 'pages/calalog/Components/BaseForm/index';
import ImageUpload from './ImageUpload';
import DescriptionField from './DescriptionField';
import { convertToRaw, EditorState } from 'draft-js';
import PriceField from './PriceField';
import draftToHtml from 'draftjs-to-html';
import { stateFromHTML } from 'draft-js-import-html';
import './styles.scss';


export type FormState = {
    name: string;
    price: number;
    description: EditorState;
    imgUrl: string;
    categories: Category[];
}

type ParamsType = {
    productId: string;
}

function Form(){
    const {register, handleSubmit, errors, setValue, control } = useForm<FormState>();
    const history = useHistory();
    const { productId } = useParams<ParamsType>();
    const [isLoadingCategories, setIsLoadingCategories] = useState(false)
    const [categories, setCategories]=useState<Category[]>([])
    const [uploadedImgUrl, setUploadedImgUrl] = useState('');
    const [productImgUrl, setProductImgUrl] = useState('')

    const isEditing = productId !== 'create'
    const formTitle = isEditing ? 'EDITAR PRODUTO' : 'CADASTRAR PRODUTO'
    
    useEffect(() => {
        if (isEditing){
            //setIsLoading(true);
            makeRequest({ url: `/products/${productId}` })
                .then(response => {
                    const contentState = stateFromHTML(response.data.description);
                    const descriptionAsEditorState = EditorState.createWithContent(contentState)
                    setValue('name', response.data.name);
                    setValue('price', response.data.price);
                    setValue('description', descriptionAsEditorState);
                    setValue('categories', response.data.categories);
                    setProductImgUrl(response.data.imgUrl);
                })
         }   
    }, [productId, isEditing, setValue]); 

    useEffect(()=>{
      setIsLoadingCategories(true)
      makeRequest({url:'/categories'})
        .then(response => setCategories(response.data.content))
        .finally(()=> setIsLoadingCategories(false))
    }, []);

    const getDescriptionFromEditor = (editorState:EditorState) => {
        return draftToHtml(convertToRaw(editorState.getCurrentContent()));
    }

    const onSubmit = (data: FormState) =>{
      const payload = {
        ...data,
        description: getDescriptionFromEditor(data.description),
        imgUrl: uploadedImgUrl || productImgUrl
      }
        makePrivateRequest({
            url: isEditing ? `/products/${productId}` : "/products", 
            method: isEditing ? 'PUT' : 'POST', 
            data: payload
          })
        .then(() => {
            toast.success('Produto salvo com sucesso!');
            history.push('/admin/products');
        })
        .catch(() => {
            toast.error('Erro ao salvar produto"');
        })
    }

    const onUploadSuccess = (imgUrl: string) =>{
      setUploadedImgUrl(imgUrl);
    }

    return(
        <form onSubmit={handleSubmit(onSubmit)}>
            <BaseForm 
            title= {formTitle}
            >
                <div className="product-form-container">
                    <div className="col-6">
                        <div className="margin-botton-30">
                            <input 
                                ref={register({
                                    required: "Campo obrigatório",
                                    minLength: {value: 5, message:"O campo deve ter no minimo 5 caracteres"},
                                    maxLength: {value: 60, message:"O campo deve ter no máximo 60 caracteres"}
                                })}
                                name="name"
                                type="text" 
                                className="form-control input-base"
                                placeholder = "Nome do Produto"
                            />
                            {errors.name &&(
                                <div className="invalid-feedback d-block">
                                    {errors.name.message}
                                </div>
                            )}
                        </div>
                        <div className="margin-botton-30">
                          <Controller
                              as ={Select}
                              name="categories"
                              roles={{required: true}} 
                              control={control}
                              isLoading={isLoadingCategories}
                              options={categories}
                              getOptionLabel={(option: Category)=>option.name}
                              getOptionValue={(option: Category)=>String(option.id)}
                              classNamePrefix="categories-select"
                              placeholder = 'Categorias'
                              inputId="categories"
                              defaultValue=""
                              isMulti
                           />
                           {errors.categories &&(
                                <div className="invalid-feedback d-block">
                                  Campo obrigatório
                                </div>
                            )}
                        </div>
                        <div className="margin-botton-30">
                            <PriceField control={control} />
                            {errors.price &&(
                                <div className="invalid-feedback d-block">
                                    {errors.price.message}
                                </div>
                            )}
                        </div>
                        <div className="margin-botton-30">
                            <ImageUpload 
                            onUploadSuccess={onUploadSuccess}
                            productImgUrl = {productImgUrl}
                            />
                        </div>
                        
                    </div>
                    <div className="col6">
                        <DescriptionField control={control}/>
                        {errors.description &&(
                            <div className="invalid-feedback d-block">
                                {errors.description}
                            </div>
                         )}
                    </div>
                </div>
            </BaseForm>
        </form>
    );
};
export default Form;