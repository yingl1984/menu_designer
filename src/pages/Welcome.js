import React, { Component } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import {NavLink} from 'react-router-dom';
// import './Welcome.css';

class Welcome extends Component {
    render() { 
        return (
            
            <div className="welcome">
                <Header></Header>
        
                <section className="item">
                   <h2> What is Restaurant Menu Design?  </h2>
                    <p>Restaurant Menu Design is a tool to design a menu for a restaurant.<br />
                       In the menu list page, user will have a clear view of all their dishes in the menu now. They can Add or Delete a dish conveniently. <br />
                       After clicking each dish's link, user will drill down to the detail page to review the dish's detail information. They also can update the detail information of that dish.</p>
                </section>
               
                <section className="item">
                    <h2>Demo </h2>  
                    Place holder
                </section>

                <section className="box item" style={{margin:"10px auto"}}>
                    <NavLink to='/menu' style={{ textDecoration: 'none' }} className="link" ><h2>Start</h2></NavLink>
                </section>

                <Footer></Footer>
            </div>
            
          );
    }
}
 
export default Welcome;
