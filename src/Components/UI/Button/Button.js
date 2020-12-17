import React from 'react';
import './Button.css';

const button = (props) => (
<button
className="Button" className={props.buttonType}
onClick={props.clicked}
>{props.children}</button>
)

export default button;