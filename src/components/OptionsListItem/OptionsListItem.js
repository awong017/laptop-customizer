import React, { Component } from 'react';
import './OptionsListItem.css';

class OptionsListItem extends Component {
    
    render() {

        const feature = this.props.option
        const description1 = this.props.features.features[this.props.option][0].name
        const description2 = this.props.features.features[this.props.option][1].name
        const itemCost1 = this.props.features.features[this.props.option][0].cost
        const itemCost2 = this.props.features.features[this.props.option][1].cost

        const obj1 = {
            name: description1,
            cost: itemCost1
        }

        const obj2 = {
            name: description2,
            cost: itemCost2
        }

        return (
            <div className='OptionsListItem'>
                {this.props.option}
                <ul>
                    <li onClick={this.props.updateFeature.bind(this, feature, obj1)}>{this.props.features.features[this.props.option][0].name} { new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD'})
                      .format(this.props.features.features[this.props.option][0].cost) }</li>
                    <li onClick={this.props.updateFeature.bind(this, feature, obj2)}>{this.props.features.features[this.props.option][1].name} { new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD'})
                      .format(this.props.features.features[this.props.option][1].cost) }</li>
                </ul>
            </div>
        )
    }
}

export default OptionsListItem;