import shop from '../apis/shop';
import * as types from '../constants/ActionTypes';

function receiveProducts(products) {
    return {
        type: types.RECEIVE_PRODUCTS,
        products: products
    }
}

export function getAllProducts() {
    return (dispatch) => {
        shop.getProducts(products => {
            dispatch(receiveProducts(products))
        })
    }
}

export function initCart() {
    
}