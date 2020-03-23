import { INCREASE_COUNTER } from '../constants/actionTypes';

export function incrementCounter(data) {
    data=data+1;
    return {
        type: INCREASE_COUNTER,
        data: data
    }
}