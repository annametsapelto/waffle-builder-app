import React from 'react';
import './BuildControls.css';
import BuildControl from './BuildControl/BuildControl';

const controls = [
    {label: 'Whipped Cream', type: 'WhippedCream'},
    {label: 'Chocolate Sauce', type: 'ChocolateSauce'},
    {label: 'Strawberry Jam', type: 'StrawberryJam'},
    {label: 'Blueberry Jam', type: 'BlueberryJam'}
]
const buildControls = (props) => (
    
    <div className="BuildControls">
        <p>Current price: {props.price.toFixed(2)}</p>
        {controls.map(ctrl => (
            <BuildControl 
            key={ctrl.label} 
            label={ctrl.label}
            addIngredient={()=>props.addIngredient(ctrl.type)}
            removeIngredient={()=>props.removeIngredient(ctrl.type)}
            disabled={props.disabled[ctrl.type]} />
        ))}
        <button
        disabled={!props.purchaseable}
        onClick={props.ordered}
        >ORDER</button>
    </div>
)
export default buildControls;