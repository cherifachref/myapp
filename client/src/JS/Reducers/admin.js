import { CURRENT_ADMIN, FAIL_ADMIN, GET_ALLUSER, LOAD_ADMIN, LOGIN_ADMIN, LOGOUT_ADMIN } from "../ActionTypes/admin"



// init state
const initialState = {
    admin: {},
    allUser:[],
    loadAdmin:false,
    errors:[],
    isAuth:false
}

// pure function
const adminReducer = (state = initialState,{type,payload}) => {
    switch (type) {
        case LOAD_ADMIN:
            return {...state,loadAdmin:true}
        
        case LOGIN_ADMIN:
            localStorage.setItem("token",payload.token)
            return { ...state,loadUser:false, admin: payload.admin, isAuth:true}
        case CURRENT_ADMIN:
            return { ...state,loadAdmin:false,admin:payload,isAuth:true}
        case GET_ALLUSER:
            return { ...state,loadAdmin:false,allUser:payload,isAuth:true} 

        case LOGOUT_ADMIN:
            localStorage.removeItem("token")
            return {
                admin: {},
                allUser:[],
                loadAdmin:false,
                errors:[],
                isAuth:false
            }
        
        case FAIL_ADMIN:
            return {...state,loadAdmin:false,errors:payload}
        default:
           return state
    }
}

export default adminReducer