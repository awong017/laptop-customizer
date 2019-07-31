import React, { Component } from 'react';
import './Cart.css';
import CartListItem from '../CartListItem/CartListItem';

class Cart extends Component {
    
    render() {
        const selected = this.props.state
        const selectedKeys = Object.keys(selected)

        return(
            selectedKeys.map((option, index) =>
                <CartListItem key={index} selected={selected} option={option}/>
        )
    )}
}

export default Cart;