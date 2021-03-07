import ProductPrice from 'core/components/ProductPrice';
import { Product } from 'core/types/Product';
import React from 'react';
import './styles.scss';

type Props={
    product: Product
}
function Card({product}: Props){
    return(

        <div className="card-base product-card-admin">
            <div className="row">
                <div className="col-2 text-center border-right py-3">
                <img 
                    src={product.imgUrl}
                    alt={product.name} 
                    className="product-card-image-admin" />
                </div>
                <div className="col-7 py-3">
                    <h3 className="product-card-name-admin">
                        {product.name}
                    </h3>
                    <ProductPrice price ={product.price} />
                    <div>
                    <span className="badge rounded-pill bg-secondary">Cat 1</span>
                    </div>
                </div>
                <div className="col-3 pt-3 pr-5">
                    <button 
                    type="button" 
                    className="btn btn-outline-secondary btn-block border-radius-10 mb-3 btn-edit">Editar</button>
                     <button 
                    type="button" 
                    className="btn btn-outline-danger btn-block border-radius-10 ">Excluir</button>
                </div>
            </div>
        </div>
    )   
}

export default Card;