
import PrivateRoute from 'core/components/Routes/PrivateRoute';
import React from 'react';
import { Switch } from 'react-router-dom';
import Navbar from './Components/Navbar';
import Products from './Components/Products';
import './styles.scss'

function Admin(){
    return(
        <div className="admin-container">
            <Navbar />
            <div className="admin-content">
                <Switch>
                    <PrivateRoute path="/admin/products">
                        <Products />
                    </PrivateRoute>
                    <PrivateRoute path="/admin/categories">
                        <h1>Categories</h1>
                    </PrivateRoute>
                    <PrivateRoute path="/admin/Users" allowedRoutes={['ROLE_ADMIN']}>
                        <h1>Users</h1>
                    </PrivateRoute>
                </Switch>
            </div>
        </div>



    )
};

export default Admin;

