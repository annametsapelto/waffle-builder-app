import React, { Component } from 'react';
//import classes from './WaffleIngredients.module.css';
import './WaffleIngredients.module.css';
import PropTypes from 'prop-types';

class WaffleIngredient extends Component {
    render() {
        let ingredient = null;
    switch (this.props.type) {
        case('WaffleBottom'):
            ingredient = <div className="WaffleBottom"></div>; 
        break;
        case('ChocolateSauce'):
            ingredient = <div className="ChocolateSauce"></div>;
        break;
        case('WhippedCream'):
            ingredient = <div className="WhippedCream"></div>;
        break;
        case('StrawberryJam'):
            ingredient = <div className="StrawberryJam"></div>;
        break;
        case('BlueberryJam'):
            ingredient = <div className="BlueberryJam"></div>;
        break;

        default: ingredient = null;
    }
    return ingredient;
}
    
}
WaffleIngredient.propTypes = {
    type: PropTypes.string.isRequired
}

export default WaffleIngredient