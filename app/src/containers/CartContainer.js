import React, { Component } from 'react';
import { connect } from 'react-redux';
import Cart from '../components/Cart';
import { initCart } from '../actions/index';

class CartContainer extends Component {

    render() {

        const { products, total } = this.props;

        return (
            <div>
                <Cart
                    products = { products }
                    total = { total }
                />
            </div>
        )
    }
}

const getCartContent = (products, cart) => {

    let newProducts = [];

    products.map((product) => {
        if (cart[product.id]) {
            newProducts = [
                ...newProducts
                ,{ ...product, quantity: cart[product.id].quantity }
            ]
        }
    })

    return newProducts;
}

const getTotal = (products) => {

    let total = 0.0;

    products.map((product) => {
        total += product.price * product.quantity;
    })

    return total.toFixed(2);
}

const mapStateToProps = (state) => {

    const products = getCartContent(state.products, state.cart);

    return {
        products: products,
        total: getTotal(products)
    }
}

export default connect(mapStateToProps)(CartContainer)
