import ButtonIcon from 'core/components/ButtonIcon';
import { saveSessionData } from 'core/utils/Auth';
import { makeLogin } from 'core/utils/request';
import React, { useState } from 'react';
import {useForm}from 'react-hook-form';
import { Link, useHistory, useLocation } from 'react-router-dom';
import AuthCard from '../Card';
import './styles.scss'

type FormState = {
    username: string;
    password: string;
}

type LocationState = {
    from: string;
}
const Login = () =>{
    const {register, handleSubmit, errors} = useForm<FormState>();
    const [hasError, setHasError] = useState(false);
    const history = useHistory();
    let location = useLocation<LocationState>();

   const { from } = location.state || { from: { pathname: "/admin" } };

    const onSubmit = (data: FormState)=>{
            makeLogin(data)
            .then(response => {
                setHasError(false)
                saveSessionData(response.data)
                history.replace(from)
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
                    <div className="margin-botton-30">
                        <input type="email" 
                            className={`form-control input-base ${errors.username ? 'is-invalid':''}`}
                            placeholder="email"
                            name="username"
                            ref={register({
                                required: "Campo obrigatório",
                                pattern: {
                                  value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                                  message: "Email inválido"
                                }
                              })}
                        />
                        {errors.username &&(
                        <div className="invalid-feedback d-block">
                            {errors.username.message}
                        </div>
                        )}
                    </div>
                    <div>
                        <input type="password" 
                            className={`form-control input-base ${errors.password ? 'is-invalid':''}`}
                            placeholder="Senha"
                            name="password"
                            ref={register({required: "Campo obrigatório"})}
                        />
                        {errors.password &&(
                        <div className="invalid-feedback d-block">
                           {errors.password.message}
                        </div>
                        )}
                    </div>
                <Link to="/auth/recover" className="login-link-recover">
                    Esqueci a senha?
                </Link>
                <div className="login-submit">
                    <ButtonIcon text="Logar"/>
                </div>
                <div className="text-center">
                    <span className="not-registred">
                        Não tem cadastro?
                    </span>
                    <Link to="auth/register" className="login-link-register">
                        CADASTRAR
                    </Link>
                </div>
                </form>
            </AuthCard>


        </div>
    )
}

export default Login;