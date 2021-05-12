import './App.css';
import React, { Component } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import PropertyList from './pages/PropertyList';

class App extends Component {
  render(){
    return (
      <main className="app">
        <Header />
          <PropertyList />
        <Footer />
      </main>
    )
  }
}

export default App;
