import jwtDecode from 'jwt-decode'
import history from './history';
export const CLIENT_ID= process.env.REACT_APP_CLIENT_ID ?? 'dscatalog';
export const CLIENT_SECRET= process.env.REACT_APP_CLIENT_SECRET ??'dscatalog123';

type LoginResponse = {
    access_token: string;
    token_type: string;
    expires_in: string;
    scope: string;
    userFirstName: string;
    userId: string;
}

export type Role = 'ROLE_OPERATOR' | 'ROLE_ADMIN';

type accessToken = {
    exp: number;
    user_name: string;
    authorities: Role[]
}
export const saveSessionData = (loginResponse: LoginResponse) =>{
    localStorage.setItem('authData', JSON.stringify(loginResponse));
}

export const getSessionData = () => {
    const sessionData = localStorage.getItem('authData') ?? '{}';
    const parsedSessionData = JSON.parse(sessionData);

    return parsedSessionData as LoginResponse;
}

export const getAccessTokenDecoded = () => {
    const sessionData = getSessionData();
    try{
        const tokenDecode = jwtDecode(sessionData.access_token)
        return tokenDecode as accessToken
    } catch (error){ 
        return {} as accessToken;
    }
}

export const isTokenValid = () => {
    const {exp} = getAccessTokenDecoded();

    return Date.now() <= exp * 1000;
}

export const isAuthenticated = () => {
    const sessionData = getSessionData();

    return sessionData.access_token && isTokenValid();
}

export const isAllowwedByRole = (routesRoles: Role[] = []) => {
    if (routesRoles.length === 0){
        return true;
    }

    const {authorities} = getAccessTokenDecoded();

    return routesRoles.some(role => authorities?.includes(role));
}

export const logout = () => {
    localStorage.removeItem('authData')
    history.replace('/auth/login')
}