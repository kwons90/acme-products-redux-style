import { addProduct, gotProducts } from '../store.js'
import axios from 'axios'

export const postProduct = (arg) => async (dispatch) => {
    try {
        const { name } = arg;
        console.log('arg', arg);
        const response = await axios.post('api/products', { name });
        dispatch(addProduct(response.data));

    } catch (err) {
        console.log('error while posting product', err)
    }
}

export const getProducts = () => async (dispatch) => {
    try {
        console.log('getProducts called');
        const response = await axios.get('/api/products');
        console.log('getProducts called', response);
        dispatch(gotProducts(response.data));
    } catch (err) {
        console.log('error while posting product', err)
    }
}
