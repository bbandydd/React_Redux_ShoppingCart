import React, { Component } from 'react';
import Product from './Product';

export default class Cart extends Component {
    render() {

        const { products } = this.props;
        const hasProducts = products.length > 0;
        const nodes = !hasProducts
            ? <em>Please add some products to cart.</em>
            : products.map(product =>
                <Product
                    product = { product }
                />
            )

        return (
            <div>
                <h2>Your Cart</h2>
                <div>{ nodes }</div>
            </div>
        )
    }
}
