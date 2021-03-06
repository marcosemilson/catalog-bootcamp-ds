import React from 'react';
import {ReactComponent as AuthImage} from '../../core/assets/Images/auth.svg';
import './styles.scss';
import { Route, Switch } from 'react-router-dom';
import Login from './Components/Login';

const Auth = () => (
    <div className="alph-container">
        <div className="auth-info">
            <h1 className="auth-info-title">
                Divulgue seus produtos <br />no DS Catalog
            </h1>
            <p className="auth-info-subtitle">
                Faça parte do nosso catálogo de divulgação e <br />aumente a venda de seus produtos.
            </p>
            <AuthImage />
        </div>
            <div className="auth-content">
            <Switch>
                <Route path="/auth"> 
                    <Login />
                </Route>
                <Route path="/auth/register"> 
                   
                </Route>
                <Route path="/auth/recouver" > 
                   
                </Route>
            </Switch>
            </div>
    </div>
);

export default Auth;