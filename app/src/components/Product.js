import React, { Component } from 'react';

export default class Product extends Component {
    render() {

        const { product } = this.props;

        return (
            <div>
                { product.title } - ${ product.price }
            </div>
        )
    }
}
