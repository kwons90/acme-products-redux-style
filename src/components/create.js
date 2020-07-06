import React, { Component } from 'react'
import axios from 'axios'
import {connect} from 'react-redux'
import { postProduct } from '../store/action'

class Create extends Component {
    constructor() {
        super()
        this.state = {
            text: ''
        }
        this.handleOnSubmit = this.handleOnSubmit.bind(this)
        this.handleOnChange = this.handleOnChange.bind(this)
    }
    componentDidMount() {
        console.log('products', this.props.products);
    }
    handleOnChange(ev) {
        this.setState({ text: ev.target.value })
    }
    handleOnSubmit(ev) {
        ev.preventDefault();
        this.props.handleOnSubmitDispatch({name: this.state.text});
        this.setState({text: ''});
    }
    render() {
        return (
            <div>
                <form onSubmit={(ev) => this.handleOnSubmit(ev)}>
                    <input
                        name='text'
                        onChange={(ev) => this.handleOnChange(ev)}
                        value={this.state.text}
                    />
                    <button disabled={!this.state.text}>Save</button>
                </form>
            </div>
        )
    }
}

const mapState = (state) => ({
    products: state.products,
})

const mapDispatch = (dispatch) => ({ 
    handleOnSubmitDispatch: arg => {
        dispatch(postProduct(arg))
    }
})

// currying in js 
export default connect(mapState, mapDispatch)(Create)