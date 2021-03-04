export const CLIENT_ID='dscatalog';
export const CLIENT_SECRET='dscatalog123';

type LoginResponse = {
    access_token: string;
    token_type: string;
    expires_in: string;
    scope: string;
    userFirstName: string;
    userId: string;
}
export const saveSectionData = (loginResponse: LoginResponse) =>{
    localStorage.setItem('authData', JSON.stringify(loginResponse));
}
