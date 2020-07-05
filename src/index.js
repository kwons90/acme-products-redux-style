import React, { Component, Fragment } from 'react';
import {HashRouter,Switch,Link, Route} from 'react-router-dom'
import ReactDOM from 'react-dom';
import Nav from './components/nav';
import Create from './components/create'
import Products from './components/products'
import axios from 'axios';
import store from './store';
import {Provider} from 'react-redux'


class App extends Component {
    // why doest below throw an error?
    // state = {
    //     products: []
    // }
    constructor() {
        super();
        this.state = {
            products: []
        }
    }
    componentDidMount() {
        axios.get('/api/products')
        .then(res =>{
            console.log(res)
            this.setState({products: res.data})
        })
        console.log(this.state.products)
    }
    render() {
        const {products} = this.state
        return (
            <HashRouter>
                <h1>Acme Products</h1>
                {Nav(this.state.products)}
                <Switch>
                    <Route path={'/products'}>{Products(products)}</Route>
                    <Route path={'/create'}><Create /></Route>
                </Switch>
            </HashRouter>
        )
    }
}

ReactDOM.render(<Provider store ={store}>
    <App /> </Provider>, document.querySelector('#app'));