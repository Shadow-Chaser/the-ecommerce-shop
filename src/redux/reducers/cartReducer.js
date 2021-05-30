import productData from '../../fakeData/productData.json'

const initialState = {
    cart: [],
    products: productData
}
const bookReducer = (state = initialState, action) => {
    switch (action.type) {
        case "ADD_TO_CART": {
            // let isAddedBefore = state.cart.find((p) => p.id === action.payload.id);

            // let count = 1;
            // if (isAddedBefore) {
            //     count++;
            // }
            // else {
            //     isAddedBefore = false
            // }


            const newProduct = { ...action.payload, count: 1 }
            const newState = {
                ...state,
                cart: [...state.cart, newProduct],
            };
            return newState;
        }
        case "REMOVE_FROM_CART": {
            const newState = {
                ...state,
                cart: state.cart.filter((p) => p.id !== action.payload.id),
            };
            return newState;
        }
        default: {
            return state;
        }
    }
}

export default bookReducer;