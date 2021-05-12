import React, { Component } from 'react';
import Header from './Header';
import Footer from './Footer';
import conf from "../../src/config";
import fetchCall from "../helpers/fetchData"
// import './NoteView.css';

class NoteView extends Component {
  state={
    status:"",
    price:"",
    comments:""
  }
  
  async getData(){
    try{
        const id = this.props.match.params.id;
        let notes = await (await fetchCall(`${conf.noteapi}/${id}`)).json();
        if(!notes)
        {
            throw new Error("Crashed!");
        }
        this.state.comments = ""
        this.setState({
            status:notes.status,
            price:notes.price,
            comments:notes.comments
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
    document.getElementById("status").removeAttribute("disabled");
    if(document.getElementById("price")){
      document.getElementById("price").removeAttribute("disabled");
    }
    document.getElementById("comments").removeAttribute("disabled");
  }

  updateNote = async(e) => {
    e.preventDefault();

    const id = this.props.match.params.id;
    const newNote = JSON.stringify({
      "status":this.state.status,
      "price":this.state.price,
      "comments": this.state.comments
    })
    let updatedStatus = await (await fetchCall(`${conf.noteapi}/${id}`, 'PATCH', newNote ));
    if(updatedStatus.ok)
      {
          alert("Note updated!");
      }
    this.getData();
    window.location.replace("/notebook");
  }

  render() {
    let isRent = false;        
          if(this.state.status === 'rent'){
            isRent = true;
          }
          
    return (      
      <div className="noteView">
        <Header></Header>
        <div className = "group">
          
          <section className = "item">
            <button onClick={()=>this.props.history.goBack()}>Back</button> 
          </section>
          <section className = "item container">
            
            <form>
            <h2>Property Details</h2>
              <div className="row">
                <div className="col-25">
                  <label htmlFor="status">Status </label> 
                </div>
                <div className="col-75">
                  <input type="text" id="status" name="status" value={this.state.status} disabled onChange={(e)=>this.updateInput(e)}></input>
                </div>
              </div>

              <div className="row">
                <div className="col-25">
                  {isRent && <label htmlFor="price">Price </label>}
                </div>
                <div className="col-75">
                  {isRent && <input type="number" id="price" name="price" value={this.state.price} disabled onChange={(e)=>this.updateInput(e)}></input>}
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
             
          )
        }  
}

export default NoteView;