import React, { Component } from 'react';

export default class Product extends Component {
    render() {

        const { product} = this.props;

        return (
            <div>
                { product.title } - ${ product.price } { typeof(product.quantity) != 'undefined' ? `x ${product.quantity}`  : null  }
            </div>
        )
    }
}
