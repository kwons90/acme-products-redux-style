import React from 'react';
import {Link} from 'react-router-dom';

const Nav = (products) => {
    return (
        <div id ='nav'>
            <Link to= '/'>Home</Link>
            <Link to = '/products'>{`Products (${products.length})`}</Link>
            <Link to = '/create'>Create A Product</Link>
        </div>
    )
}

export default Nav