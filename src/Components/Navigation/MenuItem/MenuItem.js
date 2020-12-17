import React from 'react';
import menuIcon from '../../../assets/images/menuicon.png';
import './MenuItem.css';

const menuItem = (props) => {
    return (
    <div className="Icon">
        <img click={props.open} src={menuIcon} alt="Menu Icon"/>
    </div>)
    
}

export default menuItem;