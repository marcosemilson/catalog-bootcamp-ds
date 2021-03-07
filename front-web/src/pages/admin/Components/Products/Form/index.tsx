import { makePrivateRequest } from 'core/utils/request';
import BaseForm from 'pages/calalog/Components/BaseForm/inde';
import React from 'react';
import { useForm } from 'react-hook-form';
import { useHistory } from 'react-router';
import { toast } from 'react-toastify';
import './styles.scss';

type FormState = {
    name: string;
    price: number;
    description: string;
    imageUrl: string;
}

function Form(){
    const {register, handleSubmit, errors } = useForm<FormState>();
    const history = useHistory();
    
    const onSubmit = (data: FormState) =>{
        makePrivateRequest({url:"/products", method:'POST', data})
        .then(() => {
            toast.success('Produto salvo com sucesso!');
            history.push('/admin/products');
        })
        .catch(() => {
            toast.error('Erro ao salvar produto"');
        })
    }

    return(
        <form onSubmit={handleSubmit(onSubmit)}>
            <BaseForm title="CADASTRAR PRODUTO">
                <div className="row">
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
                            <input 
                            ref={register({
                                required: "Campo obrigatório"
                            })}
                            name="price"
                            type="number" 
                            className="form-control input-base"
                            placeholder = "Preço"
                            />
                            {errors.price &&(
                                <div className="invalid-feedback d-block">
                                    {errors.price.message}
                                </div>
                            )}
                        </div>
                        <div className="margin-botton-30">
                            <input 
                                ref={register({required: "Campo obrigatório"})}
                                name="imageUrl"
                                type="text" 
                                className="form-control input-base"
                                placeholder = "Imagem do Produto"
                            />
                            {errors.imageUrl &&(
                                <div className="invalid-feedback d-block">
                                    {errors.imageUrl.message}
                                </div>
                            )}
                        </div>
                        
                    </div>
                    <div className="col6">
                        <textarea
                            ref={register({required: "Campo obrigatório"})}
                            name="description"
                            className="form-control input-base"
                            placeholder = "Descrição"
                            cols = {30}
                            rows = {10}
                        />
                        {errors.description &&(
                            <div className="invalid-feedback d-block">
                                {errors.description.message}
                            </div>
                         )}
                    </div>
                </div>
            </BaseForm>
        </form>
    );
};
export default Form;