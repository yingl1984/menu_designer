import React, { Component, createContext } from 'react';
import conf from "../config";
import fetchCall from "../helpers/fetchData"

export const NotesContext = createContext();

class NotesContextProvider extends Component{
    state={
        notes:[],
        address:"",
        state:"",
        zipcode:"",
        status:"",
        price:"",
        comments:""
    }

   async getData(){
    try{
        let notes = await (await fetchCall(conf.noteapi)).json();
        if(!notes)
        {
            throw new Error("Crashed!");
        }
        this.setState({
            notes:notes
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
        let deleted = await fetchCall(`${conf.noteapi}/${id}`, 'DELETE');
        if(deleted)
        {  
            alert('Note with id '+ id + " was deleted")
            window.location.replace("/notebook");
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
        
        const newNote = JSON.stringify({
            "address":this.state.address,
            "state": this.state.state,
            "zipcode": this.state.zipcode,
            "status":this.state.status,
            "price":this.state.price,
            "comments": this.state.comments,
            "property_id":this.state.property_id
        }) 
        let notes = await (await fetchCall(conf.noteapi, 'POST', newNote )).json();
        if(notes)
        {
            alert("Note added!");
        }
        this.getData();
        window.location.replace("/notebook");
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