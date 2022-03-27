import { ADD_CAR, FAIL_CAR, GET_CAR, LOAD_CAR, LOAD_CAR_DEL } from "../ActionTypes/car"





// init state
const initialState = {
    car : [],
    loadCar:false,
    loadCarDel:false,
    errors:[]
}

// pure function
const carReducer = (state = initialState,{type,payload}) => {
    
    switch (type) {

        case LOAD_CAR:
            return {...state,loadCar:true}
        case LOAD_CAR_DEL:
            return {...state,loadCarDel:true}
        case GET_CAR:
            return { ...state,loadCar:false,loadCarDel:false, car: payload  }

        case ADD_CAR:
            return { ...state,loadCar:false, car: payload}

        case FAIL_CAR:
            return {...state,loadCar:false,errors:payload}

        default:
           return state
    }
}

export default carReducer