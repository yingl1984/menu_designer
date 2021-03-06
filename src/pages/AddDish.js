import React, { Component } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { NotesContext } from "../context/NotesContext";
import "./AddDish.css";

class AddDish extends Component {
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
                                    <h2>Add A New Dish</h2>
                                
                                {/* Dish Name */}
                                <div className="row">
                                    <div className="col-25">
                                        <label htmlFor="name">Dish Name </label>
                                    </div>
                                    <div className="col-75">
                                        <input type="text" id="name" name="name" required onChange={handleInput}></input>
                                    </div>
                                </div>
                                {/* Price */}
                                <div className="row">
                                    <div className="col-25">
                                        <label htmlFor="state">Price </label>
                                    </div>
                                    <div className="col-75">
                                        <input type="number" step="0.01" id="price" name="price" required onChange={handleInput}></input>
                                    </div>
                                </div>
                                {/* Rate */}
                                <div className="row">
                                    <div className="col-25">
                                        <label htmlFor="price">Rate(1 to 5) </label>
                                    </div>
                                    <div className="col-75">
                                        <input type="number" id="rate" name="rate" min="1" max="5" required onChange={handleInput}></input>
                                    </div>
                                </div>
                                {/* Comments */}
                                <div className="row">
                                    <div className="col-25">
                                        <label htmlFor="comments">Comments </label>
                                    </div>
                                    <div className="col-75">
                                        <textarea id="comments" name="comments" rows="5" cols="33" onChange={handleInput}></textarea>
                                    </div>
                                </div>
                                {/* Add button */}
                                <div className="row">
                                    <button type="submit">Add</button>
                                </div>
                                </form>
                                </section>
                            </div>
                            <Footer></Footer>
                        </div>
                    );
                }
                }  
            </NotesContext.Consumer>
            );
    }
}

export default AddDish;