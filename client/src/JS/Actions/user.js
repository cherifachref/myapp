import { CURRENT_USER, FAIL_USER, LOAD_CURRENT_USER, LOAD_USER, LOGIN_USER, LOGOUT_USER, REGISTER_USER } from "../ActionTypes/user"
import axios from "axios"



export const register = (newUser,navigate) => async (dispatch) => {
    dispatch({type : LOAD_USER})
    console.log(newUser)
    
    try {
        let result = await axios.post('http://localhost:4700/api/user/register',newUser)
        console.log(result)
        dispatch({type : REGISTER_USER, payload: result.data})
        navigate('/profile')
        

    } catch (error) {
        dispatch({type:FAIL_USER, payload:error.responce.data.errors})
    }
}


export const login = (user,navigate) => async(dispatch) =>{
    dispatch({type : LOAD_USER})

    try {
        let result = await axios.post('http://localhost:4700/api/user/login',user)
        dispatch({type:LOGIN_USER, payload: result.data })
        
        navigate('/profile')
        

        
    } catch (error) {
        dispatch({type:FAIL_USER, payload:error.responce.data.errors})
    }
}



export const current = () => async (dispatch) => {
    dispatch({type : LOAD_CURRENT_USER})
    try {
        const config = {
            headers:{
                authorization : localStorage.getItem("token")
            }
        }
        let result = await axios.get("http://localhost:4700/api/user/current",config)
        dispatch({type :CURRENT_USER,payload:result.data})
    } catch (error) {
        dispatch({type:FAIL_USER, payload:error.response.data.errors})
    }
}


export const logout = (navigate) => async(dispatch) => {
    dispatch({type:LOGOUT_USER})
    navigate('/')
    
}

export const updateUser = ({id,upUser}) => async(dispatch) => {
    console.log('upUser',upUser,id,'id this user')

    try {
        await axios.put(`http://localhost:4700/api/user/login/${id}`,upUser)
        dispatch(current())
        
    } catch (error) {
        dispatch({type: FAIL_USER, payload:error.response})
    }
}


export const updateSuperUser = ({id,superUserTrue}) => async(dispatch) => {
    console.log('superUserTrue',superUserTrue,id,'id this user')

    try {
        await axios.put(`http://localhost:4700/api/user/login/${id}`,superUserTrue)
        dispatch(current())
        
    } catch (error) {
        dispatch({type: FAIL_USER, payload:error.response})
    }
}

