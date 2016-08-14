import React, { Component } from 'react';

export default class Product extends Component {
    render() {

        const { product, type} = this.props;

        return (
            <div>
                { product.title } - ${ product.price }
                {
                    (() => {
                        if (type == 'product') {
                            return ` 剩下數量: ${ product.inventory }`
                        } else if (type == 'cart') {
                            return ` x ${ product.quantity }`
                        }
                    })()
                }
            </div>
        )
    }
}
