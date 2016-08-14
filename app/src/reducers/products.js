import * as types from '../constants/ActionTypes';

export default function products(state = [], action) {
    switch(action.type) {
        case types.RECEIVE_PRODUCTS:
            return [
                ...state,
                ...action.products
            ]
        case types.ADD_TO_CART:

            const product = state[action.productIndex];

            return [
                ...state.slice(0, action.productIndex),
                { ...product, inventory:  product.inventory - 1},
                ...state.slice(action.productIndex + 1)
            ]
        default:
            return state;
    }
}
