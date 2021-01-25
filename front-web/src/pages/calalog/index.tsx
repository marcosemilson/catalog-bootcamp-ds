import React from 'react';
import { Link } from 'react-router-dom';
import ProductCard from './Components/ProductCard';
import './styles.scss'

function Catalog(){
    return(
        <div className="catalog-container">
            <h1 className="catalog-title">
                Catálogo de Produtos
            </h1>
            <div className="catalog-products">
                <Link to ="products/1"><ProductCard /></Link>
                <Link to ="products/2"><ProductCard /></Link>
                <Link to ="products/3"><ProductCard /></Link>
                <Link to ="products/4"><ProductCard /></Link>
                <Link to ="products/5"><ProductCard /></Link>
                <Link to ="products/6"><ProductCard /></Link>
                <Link to ="products/7"><ProductCard /></Link>
                <Link to ="products/8"><ProductCard /></Link>
                <Link to ="products/9"><ProductCard /></Link>
                <Link to ="products/10"><ProductCard /></Link>
            
            </div>
        </div>
    )
};

export default Catalog;