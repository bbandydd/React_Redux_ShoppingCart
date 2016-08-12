import React, { Component } from 'react';
import { connect } from 'react-redux';
import ProductsList from '../components/ProductsList';
import ProductItem from '../components/ProductItem';
import { getAllProducts } from '../actions'

class ProductsContainer extends Component {

    componentDidMount() {
        //取得初始化資料
        const { dispatch } = this.props;
        dispatch(getAllProducts());
    }

    render() {

        const { products } = this.props;

        return (
            <ProductsList title="Products">
                {
                    products.map(product =>
                        <ProductItem
                            key={ product.id }
                            product = { product }
                        />
                    )
                }
            </ProductsList>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        products: state.products
    }
}

export default connect(mapStateToProps)(ProductsContainer)
