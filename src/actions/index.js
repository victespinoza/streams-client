import {SIGN_IN, SIGN_OUT} from './types';

export const signIn = (idClient) =>{
    return {
        type: SIGN_IN,
        payload: idClient
    };
};

export const signOut = () =>{
    return {
        type: SIGN_OUT
    };
};