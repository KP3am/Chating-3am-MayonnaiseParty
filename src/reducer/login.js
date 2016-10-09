import { USERLOGIN, USERLOGINING, USERLOGINFINISH} from '../action/actionType';

export default function(state, action){
    switch (action.type){
        case USERLOGIN: 
            return {

            }
        case USERLOGINING:
            return true
        case USERLOGINFINISH:
            return {
                
            }
        default: 
            return state
    }
}