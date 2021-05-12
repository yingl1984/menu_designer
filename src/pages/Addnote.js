import React, { Component } from 'react';
import Header from "../components/Header";
import Footer from "../components/Footer";
import { NotesContext } from '../context/NotesContext';
import './Addnote.css';

class Addnote extends Component {
    render() { 
        return ( 
            <NotesContext.Consumer>
                { (ctx) => 
                {
                    const {addNote, handleInput} = ctx;
                    return (
                        <div className="addNote">
                            <Header></Header>
                            <div className = "group">
                                <section className = "item">
                                <button onClick={()=>this.props.history.goBack()}>Back</button>
                                </section>

                                <section className = "item container">
                                    <form onSubmit={(e) => addNote(e) }>
                                    <h2>Add A New Note</h2>
                                    <div className="row">
                                    <div className="col-25">
                                        <label htmlFor="address">Address </label>
                                    </div>
                                    <div className="col-75">
                                        <input type="text" id="address" name="address" required onChange={handleInput}></input>
                                    </div>
                                </div>

                                <div className="row">
                                    <div className="col-25">
                                        <label htmlFor="state">State </label>
                                    </div>
                                    <div className="col-75">
                                        <input type="text" id="state" name="state" required onChange={handleInput}></input>
                                    </div>
                                </div>

                                <div className="row">
                                    <div className="col-25">
                                        <label htmlFor="zipcode">Zipcode </label>
                                    </div>
                                    <div className="col-75">
                                        <input type="text" id="zipcode" name="zipcode" required onChange={handleInput}></input>
                                    </div>
                                </div>

                                <div className="row">
                                    <div className="col-25">
                                        <label htmlFor="status">Rent/Vacant </label>
                                    </div>
                                    <div className="col-75">
                                        <input type="text" id="status" name="status" required onChange={handleInput}></input>
                                    </div>
                                </div>

                                <div className="row">
                                    <div className="col-25">
                                        <label htmlFor="price">Price </label>
                                    </div>
                                    <div className="col-75">
                                        <input type="number" id="price" name="price" required onChange={handleInput}></input>
                                    </div>
                                </div>

                                <div className="row">
                                    <div className="col-25">
                                        <label htmlFor="comments">Comments </label>
                                    </div>
                                    <div className="col-75">
                                        <textarea id="comments" name="comments" rows="5" cols="33" onChange={handleInput}></textarea>
                                    </div>
                                </div>

                                <div className="row">
                                    <button type="submit">Add</button>
                                </div>
                                </form>
                                </section>
                            </div>
                            <Footer></Footer>
                        </div>
                    )
                }
                }  
            </NotesContext.Consumer>
            );
    }
}

export default Addnote;