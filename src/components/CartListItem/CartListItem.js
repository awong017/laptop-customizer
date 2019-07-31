import React, { Component } from 'react';
import './CartListItem.css';

class CartListItem extends Component {
    
    render() {
        return(
            <div className='CartListItem'>
                {this.props.option}
                <ul>
                    <li>{this.props.selected[this.props.option].name} { new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD'})
                      .format(this.props.selected[this.props.option].cost) }</li>
                </ul>
            </div>
        )
    }
}

export default CartListItem;

