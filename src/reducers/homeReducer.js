import { INCREASE_COUNTER } from '../constants/actionTypes';

const initalState = {
    value: 0, 
}

const homeReducer = (state = initalState, action) => {
    switch (action.type) {
        case INCREASE_COUNTER: return { ...state, value: action.data } ; 
        default: return state;
    }
}

export default homeReducer;