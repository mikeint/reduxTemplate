import { combineReducers } from 'redux';
import homeReducer from './homeReducer'; 
import { CLEAR_STORE } from '../constants/actionTypes';

const appReducer = combineReducers({
    homeState: homeReducer, 
})
 
const rootReducer = (state, action) => {
    if (action.type === CLEAR_STORE) {
        state = undefined
    }
    return appReducer(state, action)
}


export default rootReducer;