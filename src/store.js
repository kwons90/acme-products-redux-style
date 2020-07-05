import { createStore, applyMiddleware } from 'redux';
import reduxthunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';


// ACTION TYPES
export const GET_PRODUCTS = 'GET.PRODUCTS';
export  const DELETE_PRODUCTS = 'DELETE.PRODUCTS';
export  const ADD_PRODUCT_SUCESSFUL = 'ADD.PRODUCT_SUCCESSFUL'
export  const ADD_PRODUCT_FAILURE = 'ADD.PRODUCT_FAILURE'

export function gotProducts(products) {
  return {
    type: GET_PRODUCTS,
    payload: {products}
  };
}

const initialState = {
  products: [],
  isError: false,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'GET.PRODUCTS':
      return {
        ...state,
        products: action.payload.products,
      };
    case 'DELETE.PRODUCTS':
      return {
        ...state
      };
    case 'ADD.PRODUCT_SUCCESSFUL':
      return {
        ...state
      }
    case 'ADD.PRODUCT_FAILURE':
      return {
        ...state,
        isError: true
      }
    default:
      return state;
  }
}

const middleware = [];

middleware.push(
  reduxthunk.withExtraArgument({})
)

const store = createStore(reducer,composeWithDevTools(applyMiddleware(...middleware)));

export default store;