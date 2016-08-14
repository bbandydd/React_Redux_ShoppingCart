import React, { Component } from 'react';
import Product from './Product';

export default class Cart extends Component {
    render() {

        const { products, total } = this.props;
        const hasProducts = products.length > 0;
        const nodes = !hasProducts
            ? <em>Please add some products to cart.</em>
            : products.map(product =>
                <Product
                    product = { product }
                    type = { `cart` }
                />
            )

        return (
            <div>
                <h2>Your Cart</h2>
                <div>{ nodes }</div>
                <br />
                <div>Total: $ { total > 0 ? total : 0 }</div>
            </div>
        )
    }
}
