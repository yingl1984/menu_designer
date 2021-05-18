import React, { Component } from 'react';
import {NavLink} from 'react-router-dom';
import { NotesContext } from '../context/NotesContext';
import './MenuList.css';

class MenuList extends Component {  
    render() { 
        return(
        <NotesContext.Consumer>
            {
                (ctx)=> {
                    const {dishes,removeNote} = ctx;
                    // Get each dish's information 
                     const record=dishes.map(p => {
                        const {id,name} = p;
                        return (
                            <div className='List-cards' key={p.id}>
                                <div className='Card'>
                                    <button className='List-add-button' onClick={()=>removeNote(id)}>remove</button>
                                    <NavLink to={`/dish/${id}`} className="link" style={{ textDecoration: 'none' }}>                   
                                        Dish Name: {name}                                                                    
                                    </NavLink>
                                </div>   
                            </div>
                            
                        )     
                    })
                    return (
                        <div className="notesList">
                            <div className="List-header">
                                <h2>
                                    Menu List
                                </h2>
                            </div>
                            <section className="List">
                                {record}
                            </section>
                            <button className = 'box'><NavLink to="/addDish" style={{ textDecoration: 'none' }} className="link">Add</NavLink></button>
                        </div>
                      );
                }
            }
        </NotesContext.Consumer>
        )
       }
}


export default MenuList;