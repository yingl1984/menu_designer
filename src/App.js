import React, { Component } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import MenuList from "./pages/MenuList";
import "./App.css";

class App extends Component {
  render(){
    return (
      <main className="app">
        <Header />
          <MenuList />
        <Footer />
      </main>
    );
  }
}

export default App;
