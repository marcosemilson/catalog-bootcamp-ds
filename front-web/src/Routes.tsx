import Auth from 'pages/Auth';
import React from 'react';
import {BrowserRouter, Switch, Route, Redirect} from 'react-router-dom'
import Navbar from './core/components/navbar';
import Admin from './pages/Admin';
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
                <Route path="/admin/auth">
                    <Auth />
                </Route>
                <Redirect from="/admin" to="/admin/products" exact />
                <Route path="/admin" > 
                    <Admin />
                </Route>
            </Switch>
        </BrowserRouter>
    )
};
export default Routes;