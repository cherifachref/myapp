import axios from 'axios'
import { FAIL_CAR, GET_CAR, LOAD_CAR, LOAD_CAR_DEL } from '../ActionTypes/car'



// get all cars
export const getCar = () => async(dispatch) => {
    dispatch({type: LOAD_CAR})
    try {
       let result = await axios.get('http://localhost:4700/api/car/')
       dispatch({type:GET_CAR , payload : result.data })
    } catch (error) {
        dispatch({type: FAIL_CAR, payload:error.response})
        
    }
}



//add car
export const postCar = (newObjectCar) => async(dispatch) =>{
    try {
        
        dispatch({type: LOAD_CAR})
        await axios.post('http://localhost:4700/api/car/',newObjectCar)
        dispatch(getCar())
         

        
    } catch (error) {
        dispatch({type: FAIL_CAR, payload:error.response})
    }
} 

//delete car
export const deleteCar = (id) => async(dispatch) => {
    try {
        dispatch({type: LOAD_CAR_DEL})
        await axios.delete(`http://localhost:4700/api/car/${id}`)

        let result = await axios.get('http://localhost:4700/api/car/')
       dispatch({type:GET_CAR , payload : result.data })

    } catch (error) {
        dispatch({type: FAIL_CAR, payload:error.response})
    }
}

//update car color

export const updateCar = ({newLike,id}) => async(dispatch) => {
    console.log('newlike',newLike,id,'id this car action')

    try {
        await axios.put(`http://localhost:4700/api/car/${id}`,newLike)
        dispatch(getCar())


    } catch (error) {
        dispatch({type: FAIL_CAR, payload:error.response})
    }
}




