import React, { Component } from 'react';
import ProductsContainer from './ProductsContainer';
import CartContainer from './CartContainer';

export default class App extends Component {
    render() {
        return (
            <div>
                <h1>Shopping Cart Example</h1>
                <hr />
                <ProductsContainer />
                <hr />
                <CartContainer />
            </div>
        )
    }
}
