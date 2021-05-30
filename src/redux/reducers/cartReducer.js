import productData from '../../fakeData/productData.json'

const initialState = {
    cart: [],
    products: productData
}
const bookReducer = (state = initialState, action) => {
    switch (action.type) {
        case "ADD_TO_CART": {
            // let count = 1;
            // let isAddedBefore = state.cart.find((p) => p.id === action.payload.id);


            // if (isAddedBefore) {
            //     isAddedBefore.count = isAddedBefore.count + 1;
            //     // count++;

            // }
            // console.log("clicked");

            // const newProduct = { ...action.payload, count: count }
            // const newState = { ...state, cart: [...state.cart, newProduct] };

            // // console.log(newProduct);

            // return isAddedBefore ? state : newState;

            let alreadyExists = false;
            state.cart.forEach((x) => {
                if (x.id === action.payload.id) {
                    alreadyExists = true;
                    x.count++;
                }
            });
            if (!alreadyExists) {

                state.cart.push({ ...action.payload, count: 1 });
            }

            const newState = { ...state, cart: [...state.cart] }

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