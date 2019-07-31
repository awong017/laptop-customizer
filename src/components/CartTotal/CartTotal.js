import React, { Component } from 'react';
import './CartTotal.css';

class CartTotal extends Component {
    
    render() {
        const selected = this.props.state
        const total = Object.keys(selected)
            .reduce((acc, curr) => acc + selected[curr].cost, 0);  

        return(
            <div className='CartTotal'>
                <label>Your Price: </label>
                {new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD'})
                      .format(total)}
            </div>
        )
    }
}

export default CartTotal;