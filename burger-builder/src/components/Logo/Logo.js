import React from 'react';
import burgerLogo from '../../assets/Images/burger-logo (1).png';
import classes from './Logo.css';

const logo = (props) => (
    <div className={classes.Logo} style={{height: props.height}}>
        <img src={burgerLogo} alt='Burger Builder'/>
    </div>
)


export default logo;