import React from 'react';
import './Toolbar.css';
import Logo from '../../Logo/Logo';
import NavigationItems from '../NavigationItems/NavigationItems';
import MenuItem from '../MenuItem/MenuItem';

const toolbar = (props) => (
    <header className="Toolbar">
        <MenuItem open={props.openSide}/>
        <Logo height="80%"/>
        <nav className="Desktop">
            <NavigationItems />
        </nav>
    </header>
)

export default toolbar;