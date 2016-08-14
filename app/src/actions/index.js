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

export function addToCart(productId) {
    return (dispatch, getState) =>  {

        getState().products.map((product, index) => {
            if (product.inventory > 0 && product.id == productId) {
                dispatch(addToCartUnsafe(product.id, index));
            }
        })
    }
}

function addToCartUnsafe(productId, productIndex) {
    return {
        type: types.ADD_TO_CART,
        productId,
        productIndex
    }
}
