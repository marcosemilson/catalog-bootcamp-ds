import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom'
import Navbar from './core/components/navbar';
import Admin from './pages/admin';
import Catalog from './pages/calalog';
import ProductDetails from './pages/calalog/Components/ProductDetails';
import Home from './pages/home';

function Routes(){
    return(
        <BrowserRouter>
            <Navbar />
            <Switch>
                <Route path="/" exact > 
                    <Home />
                </Route>
                <Route path="/products" exact> 
                    <Catalog />
                </Route>
                <Route path="/products/:productId" > 
                    <ProductDetails />
                </Route>
                <Route path="/admin" > 
                    <Admin />
                </Route>
            </Switch>
        </BrowserRouter>
    )
};
export default Routes;