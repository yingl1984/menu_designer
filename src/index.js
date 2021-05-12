import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
// import './index.css';
import App from './App';
import Welcome from './pages/Welcome'
import reportWebVitals from './reportWebVitals';
import NotesContextProvider from './context/NotesContext';
import NoteView from './components/NoteView'
import Addnote from './pages/Addnote'

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Switch>
        <Route path='/' component={Welcome} exact={true}/>
        <Route exact path='/notebook'>
          <NotesContextProvider>
           <App />
          </NotesContextProvider>
        </Route>
        <Route path="/addNote" render={(props) => <NotesContextProvider><Addnote {...props}/></NotesContextProvider>} />
        <Route path="/note/:id" render={(props)=>  <NotesContextProvider><NoteView {...props} /></NotesContextProvider>} />
      </Switch>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
