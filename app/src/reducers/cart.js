import * as types from '../constants/ActionTypes';

const initialState = {
    addedIds: [1, 3]
}

export default function Cart(state = initialState, action) {
    switch(action.type) {
        default:
            return {
                addedIds: state.addedIds
            };
    }
}
