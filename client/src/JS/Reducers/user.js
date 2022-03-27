// import

import { FAIL_USER, LOAD_USER, LOGIN_USER, LOGOUT_USER, REGISTER_USER,CURRENT_USER, LOAD_CURRENT_USER } from "../ActionTypes/user"




// init state
const initialState = {
    user: {},
    loadUser:false,
    loadCurrentUser:false,
    errors:[],
    isAuth:false
}

// pure function
const userReducer = (state = initialState,{type,payload}) => {
    switch (type) {
        case LOAD_USER:
            return {...state,loadUser:true}
        case LOAD_CURRENT_USER:
            return {...state,loadCurrentUser:true}
        case REGISTER_USER:
            localStorage.setItem("token",payload.token)
            return { ...state,loadUser:false, user: payload.user, isAuth:true}
        case LOGIN_USER:
            localStorage.setItem("token",payload.token)
            return { ...state,loadUser:false, user: payload.user, isAuth:true}
        case CURRENT_USER:
            return { ...state,loadCurrentUser:false,user:payload,isAuth:true}


        case LOGOUT_USER:
            localStorage.removeItem("token")
            return {
                user: {},
                loadUser:false,
                loadCurrentUser:false,
                errors:[],
                isAuth:false
            }
        
        case FAIL_USER:
            return {...state,loadUser:false,errors:payload}
        default:
           return state
    }
}

export default userReducer