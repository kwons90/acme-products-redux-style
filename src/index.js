import React, { Component, Fragment } from 'react';
import {HashRouter,Switch,Link, Route} from 'react-router-dom'
import ReactDOM from 'react-dom';
import Nav from './components/nav';
import Create from './components/create'
import Products from './components/products'
import axios from 'axios';
import store from './store';
import {Provider} from 'react-redux'
import {getProducts} from './store/action'

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
    componentDidMount(){
        store.dispatch(getProducts())
        .then(res => {
        this.unsubscribe = store.subscribe(() => this.setState(store.getState()));
        })
        .then(res => {
        console.log('store.getstate',store.getState())
        this.setState(store.getState())
        })
    }
    componentWillUnmount() {
        this.unsubscribe()
      }
    render() {
        console.log("in here",store.getState())
        return (
            <HashRouter>
                <h1>Acme Products</h1>
                {Nav(this.state.products)}
                <Switch>
                    <Route path={'/products'}>{Products(this.state.products)}</Route>
                    <Route path={'/create'}><Create /></Route>
                </Switch>
            </HashRouter>
        )
    }
}

ReactDOM.render(<Provider store ={store}>
    <App /> </Provider>, document.querySelector('#app'));