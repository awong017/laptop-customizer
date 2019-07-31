import React, { Component } from 'react';
import './AppHeader.css';

class AppHeader extends Component {
    render() {
        return(
            <div className='AppHeader'>
                <h1>ELF Computing</h1>
                <h3>Laptops</h3>
                <h5>Customize your laptop</h5>  
            </div>    
        )
    }
}

export default AppHeader;
