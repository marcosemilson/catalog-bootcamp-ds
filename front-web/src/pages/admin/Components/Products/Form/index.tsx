import { makeRequest } from 'core/utils/request';
import BaseForm from 'pages/calalog/Components/BaseForm/inde';
import React, { useState } from 'react';
import './styles.scss'

type FormState = {
    name: string;
    category: string;
    price: number;
    description: string;
}

type FormEvent =  React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>

function Form(){
    const [formData, setFormData]=useState<FormState>({
        name:'',
        category:'',
        price: 0,
        description:''
    });
    
    const handleOnChange = (event:FormEvent) =>{
        const name = event.target.name;
        const value = event.target.value;

        setFormData(data =>({...data, [name]: value}))
    }

    const handleSubmit = (event: React.ChangeEvent<HTMLFormElement>) =>{
        event.preventDefault();
        const payload={
            ...formData,
            imgUrl: 'https://images7.kabum.com.br/produtos/fotos/115737/console-sony-playstation-5-midia-fisica_1598984720_g.jpg',
            categories: [{
                id: formData.category
            }]
        }
        makeRequest({url:"/products", method:'POST', data: payload})
        .then(() =>{
            setFormData({name: '', category: '', price: 0, description: '' });
        });
    }
    return(
        <form onSubmit={handleSubmit}>
            <BaseForm title="CADASTRAR PRODUTO">
                <div className="row">
                    <div className="col-6">
                        <input 
                            value = {formData.name}
                            name="name"
                            type="text" 
                            className="form-control mb-3"
                            onChange = {handleOnChange}
                            placeholder = "Nome do Produto"
                        />
                        <select 
                            value = {formData.category}
                            name="category" 
                            className="form-control mb-3" 
                            onChange = {handleOnChange}>
                            <option value = "1">Livros</option>
                            <option value = "3">Computadores</option>
                            <option value = "2">Eletronicos</option>
                        </select>
                        <input 
                            value = {formData.price}
                            name="price"
                            type="text" 
                            className="form-control mb-3"
                            onChange = {handleOnChange}
                            placeholder = "Preço"
                        />
                    </div>
                    <div className="col6">
                        <textarea
                            name="description"
                            className="form-control"
                            onChange = {handleOnChange}
                            cols = {30}
                            rows = {10}
                        />
                    </div>
                </div>
            </BaseForm>
        </form>
    );
};
export default Form;