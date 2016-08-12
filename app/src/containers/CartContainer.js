import React, { Component } from 'react';
import { connect } from 'react-redux';
import Cart from '../components/Cart';
import { initCart } from '../actions/index';

class CartContainer extends Component {

    render() {

        const { products } = this.props;

        console.log('products', products);

        return (
            <div>
                <Cart
                    products = { products }
                />
            </div>
        )
    }
}

const getCartContent = (products, addedIds) => {
    let newProducts = products.filter(product => {
        if (addedIds.indexOf(product.id) != -1) return product
    });
    return newProducts;
}

const mapStateToProps = (state) => {
    return {
        products: getCartContent(state.products, state.cart.addedIds)
    }
}

export default connect(mapStateToProps)(CartContainer)
