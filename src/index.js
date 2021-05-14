import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import App from './App';
import Welcome from './pages/Welcome'
import reportWebVitals from './reportWebVitals';
import NotesContextProvider from './context/NotesContext';
import DishDetails from './components/DishDetails'
import AddDish from './pages/AddDish'
import './index.css';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Switch>
        <Route path='/' component={Welcome} exact={true}/>
        <Route exact path='/menu'>
          <NotesContextProvider>
           <App />
          </NotesContextProvider>
        </Route>
        <Route path="/addDish" render={(props) => <NotesContextProvider><AddDish {...props}/></NotesContextProvider>} />
        <Route path="/dish/:id" render={(props)=>  <NotesContextProvider><DishDetails {...props} /></NotesContextProvider>} />
      </Switch>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
