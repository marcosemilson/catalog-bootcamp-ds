import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Form from './Form';
import List from './List';

function Products(){
    return(
        <div className="admin-products-container">
            <Switch>
                <Route path="/admin/products" exact>
                   <List /> 
            </Route>
            <Route path="/admin/products/:productId">
                <Form />
            </Route>
            </Switch>
        </div>
    )
}
export default Products
