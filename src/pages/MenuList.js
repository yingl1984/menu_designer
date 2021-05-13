import React, { Component } from 'react';
import {NavLink} from 'react-router-dom';
import { NotesContext } from '../context/NotesContext';
// import './PropertyList.css';

class MenuList extends Component {  
    render() { 
        return(
        <NotesContext.Consumer>
            {
                (ctx)=> {
                    const {notes,removeNote} = ctx;
                     const record=notes.map(p => {
                        const {id,address,state,zipcode} = p;
                        return (
                            <div className='List-cards' key={p.id}>
                                <div className='Card'>
                                    <button className='List-add-button' onClick={()=>removeNote(id)}>remove</button>
                                    <NavLink to={`/dish/${id}`} className="link" style={{ textDecoration: 'none' }}>                   
                                        Dish Name: {address}, Picture: {state}                                                                    
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