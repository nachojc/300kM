import {ActionReducer} from "@ngrx/store";

import { LoginModel, initialState } from '../models/login.model';
import {LoginActionTypes, Actions} from '../actions/login.action';


/**
 * action.type: string
 * action.payload?: any
 */


export const Login:ActionReducer<LoginModel> = (state = initialState, action: Actions) => {

    switch (action.type) {
        case LoginActionTypes.LOGIN_COMPLETE:
            let data = action.payload;

            return data;
        
        case LoginActionTypes.LOGIN_ERRROR:
        return {
                state: -1,
                status: false,
                uuid: '',
                user: ''
            };
        case LoginActionTypes.LOGOUT:

            

        default:
            return state;
    }
};

