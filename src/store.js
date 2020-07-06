import { createStore, applyMiddleware } from 'redux';
import reduxthunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';


// ACTION TYPES
const GET_PRODUCTS = 'GET.PRODUCTS';
const DELETE_PRODUCTS = 'DELETE.PRODUCTS';
const ADD_PRODUCT_SUCESSFUL = 'ADD.PRODUCT_SUCCESSFUL'
const ADD_PRODUCT_FAILURE = 'ADD.PRODUCT_FAILURE'

// ACTION SETTER
export function gotProducts(products) {
  return {
    type: GET_PRODUCTS,
    payload: { products }
  };
}

export function deleteProducts(product) {
  return {
    type: DELETE_PRODUCTS,
    payload: {product}
  }
}

export function addProduct(product) {
  return {
    type: ADD_PRODUCT_SUCCESSFUL,
    payload: {product}
  }
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

const store = createStore(reducer, composeWithDevTools(applyMiddleware(...middleware)));

export default store;