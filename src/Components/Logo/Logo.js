import React from 'react';
import waffleLogo from '../../assets/images/waffles.png';
import './Logo.css';

const logo = (props) => (
    <div className="Logo" style={{height: props.height, margin: props.margin}}>
        <img src={waffleLogo} alt="Waffle House"/>
    </div>
)

export default logo;