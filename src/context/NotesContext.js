import React, { Component, createContext } from "react";
import conf from "../config";
import fetchCall from "../helpers/fetchData";

export const NotesContext = createContext();

class NotesContextProvider extends Component{
    state={
        dishes:[],
        name:"",
        price:"",
        rate:"",
        comments:""
    }

   async getData(){
    try{
        let dishes = await (await fetchCall(conf.noteapi)).json();
        if(!dishes)
        {
            throw new Error("Crashed!");
        }
        this.setState({
            dishes:dishes
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

    removeNote=async(id)=>{
        let deleted = await fetchCall(`${conf.noteapi}/${id}`, "DELETE");
        if(deleted)
        {  
            alert("Dish with id "+ id + " was deleted");
            window.location.replace("/menu");
        }
    }
    
    handleInput = (e) => {
        const{name, value} = e.target;
        this.setState({
            [name]: value
        });
    }
  
    addNote = async (e) => {
        e.preventDefault();
        
        const newDish = JSON.stringify({
            "name":this.state.name,
            "price":this.state.price,
            "rate":this.state.rate,
            "comments": this.state.comments,
        }); 
        let dishes = await (await fetchCall(conf.noteapi, "POST", newDish )).json();
        if(dishes)
        {
            alert("Dish added!");
        }
        this.getData();
        window.location.replace("/menu");
    };

    render() { 
        return (    
                <NotesContext.Provider value={{...this.state, updateInputStatus: this.updateInputStatus, updateNote:this.updateNote,removeNote:this.removeNote,handleInput: this.handleInput, 
            addNote: this.addNote}}>
                    {this.props.children}
                </NotesContext.Provider>
            
          );
    }
}
export default NotesContextProvider;