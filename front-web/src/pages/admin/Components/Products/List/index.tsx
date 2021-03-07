import React from 'react';
import { useHistory } from 'react-router-dom';
import Card from '../Card';
import './styles.scss';

function List(){
    const history = useHistory();
    const handleCreate = () =>{
        history.push('/admin/products/create');
    }
    return(

        <div className="admin-peoducts-list">
            <button className="btn btn-primary btn-lg" onClick={handleCreate}>
                ADICIONAR
            </button>
            <div className="admin-list-container">
                <Card />
                <Card />
                <Card />
            </div>
        </div>
    );
};

export default List;