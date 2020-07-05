import React, { Component } from 'react';
import axios from 'axios';


const Products = (products) => {

    const handleClick = async (id) => {
        try {
            const response = await axios.delete(`api/products/${id}`);
            console.log('res', response);
        } catch (err) {
            console.log('error while deleting', err)
        }
    }
    return (
        <ul id='products'>
            {products.map((product) => (
                <li key={product.id}>
                    <div>{product.name}</div>
                    <button onClick={() =>handleClick(product.id)}>DESTROY</button>
                </li>
            ))}
        </ul>
    );
};
export default Products;