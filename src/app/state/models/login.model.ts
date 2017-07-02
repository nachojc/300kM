export interface LoginModel {
    status: boolean;
    uuid: string;
    state: number;
    user: string;
}

const initialState: LoginModel = {
    state: 0,
    status: false,
    uuid: '',
    user: ''
};



export {initialState};