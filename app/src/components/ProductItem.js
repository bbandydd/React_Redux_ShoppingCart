import React, { Component } from 'react';
import Product from './Product';

export default class ProductItem extends Component {
    render() {

        const { product } = this.props;

        return (
            <div style={{ marginBottom: 20 }}>
                <Product
                    product = { product }
                />
                <button>
                    Add to cart
                </button>
            </div>
        )
    }
}
