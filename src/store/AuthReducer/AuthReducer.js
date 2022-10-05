import {users} from "../../utils/users";

const initialState = {
    auth:false,
    usersObj:  [...users]
}

export default function AuthReducer(state = initialState,action) {
    switch (action.type){
        case 'SET_AUTHORIZE':
            return {...state, auth: action.payload}
        default:
            return state;
    }

}
