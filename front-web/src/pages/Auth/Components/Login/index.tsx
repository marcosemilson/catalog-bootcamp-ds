import ButtonIcon from 'core/components/ButtonIcon';
import { saveSectionData } from 'core/utils/Auth';
import { makeLogin } from 'core/utils/request';
import React, { useState } from 'react';
import {useForm}from 'react-hook-form';
import { Link, useHistory } from 'react-router-dom';
import AuthCard from '../Card';
import './styles.scss'

type FormData = {
    username: string;
    password: string;
}
const Login = () =>{
    const {register, handleSubmit} = useForm<FormData>();
    const [hasError, setHasError] = useState(false);
    const history = useHistory();

    const onSubmit = (data: FormData)=>{
            makeLogin(data)
            .then(response => {
                setHasError(false)
                saveSectionData(response.data)
                history.push('/admin')
            })
            .catch(() => {
                setHasError(true)
            })
    }
    return(
        <div>
            <AuthCard title="Login">
                {hasError && (
                    <div className="alert alert-danger mt-5">
                        Usuário ou senha inválidos!
                    </div>
                )}
                <form className="login-form" onSubmit={handleSubmit(onSubmit)}>
                    <input type="email" 
                    className="form-control input-base margin-botton-30"
                    placeholder="email"
                    name="username"
                    ref={register({required: true})}
                />
                 <input type="password" 
                    className="form-control input-base"
                    placeholder="Senha"
                    name="password"
                    ref={register({required: true})}
                />
                <Link to="/admin/auth/recover" className="login-link-recover">
                    Esqueci a senha?
                </Link>
                <div className="login-submit">
                    <ButtonIcon text="Logar"/>
                </div>
                <div className="text-center">
                    <span className="not-registred">
                        Não tem cadastro?
                    </span>
                    <Link to="/admin/auth/register" className="login-link-register">
                        CADASTRAR
                    </Link>
                </div>
                </form>
            </AuthCard>


        </div>
    )
}

export default Login;