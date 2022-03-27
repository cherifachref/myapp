
import { CURRENT_ADMIN, FAIL_ADMIN, GET_ALLUSER, LOAD_ADMIN, LOGIN_ADMIN, LOGOUT_ADMIN } from "../ActionTypes/admin"
import axios from "axios"






export const loginAdmin = (admin,navigate) => async(dispatch) =>{
    dispatch({type : LOAD_ADMIN})

    try {
        let result = await axios.post('http://localhost:4700/api/admin/login',admin)
        dispatch({type:LOGIN_ADMIN, payload: result.data })
        
        navigate('/profileAdmin')
        

        
    } catch (error) {
        dispatch({type:FAIL_ADMIN, payload:error.responce.data.errors})
    }
}



export const currentAdmin = () => async (dispatch) => {
    dispatch({type : LOAD_ADMIN})
    try {
        const config = {
            headers:{
                authorization : localStorage.getItem("token")
            }
        }
        let result = await axios.get("http://localhost:4700/api/admin/current",config)
        dispatch({type :CURRENT_ADMIN,payload:result.data})
    } catch (error) {
        dispatch({type:FAIL_ADMIN, payload:error.response.data.errors})
    }
}


export const getUser = () => async(dispatch) => {
    dispatch({type: LOAD_ADMIN})
    try {
       let result = await axios.get('http://localhost:4700/api/admin/allUser')
       dispatch({type:GET_ALLUSER , payload : result.data })
    } catch (error) {
        dispatch({type: FAIL_ADMIN, payload:error.response})
        
    }
}

export const deleteUser = (id) => async(dispatch) => {
    try {
        
        await axios.delete(`http://localhost:4700/api/admin/${id}`)
        dispatch(getUser())
    } catch (error) {
        dispatch({type: FAIL_ADMIN, payload:error.response})
    }
}





export const logoutAdmin = () => async(dispatch) => {
    dispatch({type:LOGOUT_ADMIN})
}