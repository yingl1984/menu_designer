import React, { Component } from "react";
import Header from "./Header";
import Footer from "./Footer";
import conf from "../config";
import fetchCall from "../helpers/fetchData";
import "./DishDetails.css";

class DishDetails extends Component {
  state={
    name:"",
    price:"",
    rate:"",
    comments:""
  }

  async getData(){
    try{
        const id = this.props.match.params.id;
        let dishes = await (await fetchCall(`${conf.noteapi}/${id}`)).json();
        if(!dishes)
        {
            throw new Error("Crashed!");
        }
        this.state.comments = "";
        this.setState({
            name:dishes.name,
            price:dishes.price,
            rate:dishes.rate,
            comments:dishes.comments
        });
    }
    catch(err)
        {
         return err.message;
        }
    }

    async componentDidMount() {
      this.getData();
    } 

  updateInput = (e)=>{
    const {name,value} = e.target;
    this.setState({
        [name]: value
    });
  }

  updateInputStatus = async(e)=>{
    e.preventDefault();
    document.getElementById("name").removeAttribute("disabled");
    document.getElementById("price").removeAttribute("disabled");
    document.getElementById("rate").removeAttribute("disabled");
    document.getElementById("comments").removeAttribute("disabled");
  }

  updateNote = async(e) => {
    e.preventDefault();

    const id = this.props.match.params.id;
    const newDish = JSON.stringify({
      "name":this.state.name,
      "price":this.state.price,
      "rate":this.state.rate,
      "comments": this.state.comments
    });
    let updatedStatus = await (await fetchCall(`${conf.noteapi}/${id}`, "PATCH", newDish ));
    if(updatedStatus.ok)
      {
          alert("Dish updated!");
      }
    this.getData();
    window.location.replace("/menu");
  }

  render() {
          
    return (      
      <div className="noteView">
        <Header></Header>
        
        <div className = "group">
          
          <section className = "item">
            <button onClick={()=>this.props.history.goBack()}>Back</button> 
          </section>
          <section className = "item container">
            
            <form>
            <h2>Dish Details</h2>
              <div className="row">
                <div className="col-25">
                  <label htmlFor="status">Dish Name </label> 
                </div>
                <div className="col-75">
                  <input type="text" id="name" name="name" value={this.state.name} disabled onChange={(e)=>this.updateInput(e)}></input>
                </div>
              </div>

              <div className="row">
                <div className="col-25">
                  <label htmlFor="price">Price </label>
                </div>
                <div className="col-75">
                  <input type="number" step="0.01" id="price" name="price" value={this.state.price} disabled onChange={(e)=>this.updateInput(e)}></input>
                </div>
              </div>

              <div className="row">
                <div className="col-25">
                  <label htmlFor="price">Rate(1 to 5) </label>
                </div>
                <div className="col-75">
                  <input type="number" id="rate" name="rate" min="1" max="5" value={this.state.rate} disabled onChange={(e)=>this.updateInput(e)}></input>
                </div>
                <div>
  
                </div>
              </div>

              <div className="row">
                <div className="col-25">
                  <label htmlFor="comments">Comments </label> 
                </div>
                <div className="col-75">
                  <textarea id="comments" name="comments" rows="5" cols="33" value={this.state.comments} disabled onChange={(e)=>this.updateInput(e)}></textarea>
                </div>
              </div>

              <div className="row">
                <button onClick={e => this.updateInputStatus(e)}>Update</button> 
                <button onClick={e => this.updateNote(e)}>Save</button>
              </div>
            </form>                                
          </section>
        </div>             
          <Footer></Footer>
      </div>
             
          );
        }  
}

export default DishDetails;