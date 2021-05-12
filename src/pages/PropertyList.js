import React, { Component } from 'react';
import {NavLink} from 'react-router-dom';
import { NotesContext } from '../context/NotesContext';
import './PropertyList.css';

class PropertyList extends Component {  
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
                                    <NavLink to={`/note/${id}`} className="link" style={{ textDecoration: 'none' }}>                   
                                        Address: {address}, State: {state}, Zip Code: {zipcode}                                                                    
                                    </NavLink>
                                </div>   
                            </div>
                            
                        )     
                    })
                    return (
                        <div className="notesList">
                            <div className="List-header">
                                    <h2>
                                        Property List
                                    </h2>
                            </div>
                            <section className="List">
                                {record}
                            </section>
                            <button className = 'box'><NavLink to="/addNote" style={{ textDecoration: 'none' }} className="link">Add</NavLink></button>
                        </div>
                      );
                }
            }
        </NotesContext.Consumer>
        )
       }
}


export default PropertyList;