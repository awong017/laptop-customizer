import React, { Component } from 'react';
import './OptionsList.css';
import OptionsListItem from '../OptionsListItem/OptionsListItem';

class OptionsList extends Component {
    
    render() {
        const features = this.props
        const featuresKeys = Object.keys(features.features)

        return(
            featuresKeys.map((option, index) =>
                <OptionsListItem key={index} features={features} option={option} updateFeature={this.props.updateFeature}/>
        )
    )}
}

export default OptionsList;