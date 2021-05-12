import React, { Component } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import {NavLink} from 'react-router-dom';
import './Welcome.css';

class Welcome extends Component {
    render() { 
        return (
            
            <div className="welcome">
                <Header></Header>
        
                <section className="item">
                   <h2> What is Rental property manager?  </h2>
                    <p>Rental Property Notebook is a tool for rental property manager or real estate investor to maintain their properties.<br />
                       In the notebook page, user will have a clear view of all their properties. They can Add or Delete a property conveniently. <br />
                       After clicking each property's link, user will drill down to the detail page to review the property's detail rental information. They also can update the detail information to keep tracking the status of that property.</p>
                </section>
               
                <section className="item">
                    <h2>Demo </h2>  
                    <video width="55%" controls>
                    <source src="https://youtu.be/Q08NsIQtyH0" />
                    Your browser does not support HTML video.
                    </video>
                </section>

                <section className="box item" style={{margin:"10px auto"}}>
                    <NavLink to='/notebook' style={{ textDecoration: 'none' }} className="link" ><h2>Start</h2></NavLink>
                </section>

                <Footer></Footer>
            </div>
            
          );
    }
}
 
export default Welcome;
