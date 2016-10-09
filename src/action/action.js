import * as ActionType from './actionType';

//login
export function login(userpd){
    return {
        type: ActionType.USERLOGIN,
        userpd
    }
}

export function logined(islogin){
    return {
        type: ActionType.USERLOGINING,
        islogin
    }
}

export function loginComponent(test){
    return {
        type: ActionType.USERLOGINFINISH,
        test
    }
}
