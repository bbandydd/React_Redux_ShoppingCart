import React, { Component } from 'react';
import Product from './Product';

export default class ProductItem extends Component {
    render() {

        const { product } = this.props;

        return (
            <div style={{ marginBottom: 20 }}>
                <Product
                    product = { product }
                    type = { `product` }
                />
                <button
                    onClick = { this.props.onAddToCart }
                    disabled = { product.inventory > 0 ? '' : 'disabled' }
                >
                    { product.inventory > 0 ? 'Add to cart' : 'Sold out' }
                </button>
            </div>
        )
    }
}
