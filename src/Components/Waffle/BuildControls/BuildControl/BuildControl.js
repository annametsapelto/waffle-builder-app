import React from 'react';
import './BuildControl.css';

const buildControl = (props) => (
    <div className="BuildControl">
        <div className="Label">{props.label}</div>
        <button onClick={props.removeIngredient} disabled={props.disabled}>Remove</button>
        <button onClick={props.addIngredient}>Add</button>
    </div>
);

export default buildControl;