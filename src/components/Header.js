import React, { Component } from "react";
import {NavLink} from "react-router-dom";
import "./Header.css";

class Header extends Component {
    render() { 
        return (
            <header className="headSection">
                <NavLink to='/' className="link" style={{ textDecoration: "none" }}><h1>Restaurant Menu Designer</h1></NavLink>
            </header>
          );
    }
}
 
export default Header;