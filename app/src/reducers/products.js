import * as types from '../constants/ActionTypes';

export default function products(state = [], action) {
    switch(action.type) {
        case types.RECEIVE_PRODUCTS:
            return [
                ...state,
                ...action.products
            ]
        default:
            return state;
    }
}
