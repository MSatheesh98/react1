import { combineReducers } from "redux";

import empReducer from './empreducer'
import studentReducer from './studentreducer' 
import usersReducer from './usersreducer'

var rootReducer = combineReducers
({
     
    empReducer,studentReducer,usersReducer

})
export default rootReducer;