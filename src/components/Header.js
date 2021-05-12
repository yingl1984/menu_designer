import React, { Component } from 'react';
import {NavLink} from 'react-router-dom';
import "./Header.css";
import pencilLogo from '../images/smartphone.png'

class Header extends Component {
    render() { 
        return (
            <header className="headSection">
                <NavLink to='/' className="link" style={{ textDecoration: 'none' }}><img src={pencilLogo} alt="pencil icon" width="30" height="30"/><h1>Rental Property Notebook</h1></NavLink>
            </header>
          );
    }
}
 
export default Header;