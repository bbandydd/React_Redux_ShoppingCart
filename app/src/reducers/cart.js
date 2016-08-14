import * as types from '../constants/ActionTypes';

export default function Cart(state = {}, action) {
    switch(action.type) {
        case types.ADD_TO_CART:
            return {
                ...state,
                [action.productId]: {
                    ...state[action.productId],
                    quantity: typeof(state[action.productId]) != 'undefined'
                        ? state[action.productId].quantity + 1
                        : 1
                }
            }
        default:
            return state;
    }
}
