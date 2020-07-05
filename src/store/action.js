import {gotProducts} from '../store.js'

export const getProducts = async (arg) = ({dispatch}) => {
    try {
        const { name } = arg;
        console.log('arg', arg);
        const response = await axios.post('api/products', { name });
        dispatch(gotProducts(response.data));

    } catch (err) {
        console.log('error while posting product', err)
    }
}