import {combineReducers} from 'redux'
import userReducer from './user'
import adminReducer from './admin'
import carReducer from './car'



const rootReducer = combineReducers({userReducer,carReducer,adminReducer})

export default rootReducer