import React, { Component } from 'react';
import { connect } from 'react-redux';
import Cart from '../components/Cart';
import { initCart } from '../actions/index';

class CartContainer extends Component {

    render() {

        const { products } = this.props;

        return (
            <div>
                <Cart
                    products = { products }
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

const mapStateToProps = (state) => {
    return {
        products: getCartContent(state.products, state.cart)
    }
}

export default connect(mapStateToProps)(CartContainer)
