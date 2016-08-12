import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import products from '../reducers/products';
import cart from '../reducers/cart';

const Reducers = combineReducers({
    products, cart
});

export default applyMiddleware(thunk)(createStore)(Reducers, window.devToolsExtension ? window.devToolsExtension() : undefined);
