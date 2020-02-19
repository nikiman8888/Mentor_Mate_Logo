import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';
import Header from './components/Header/Header';
import Main from './components/Main/Main';

function App() {
  return (
      <BrowserRouter>
      <Header/>
          <Switch>
            <Route path = '/' exact component = {Main}/>
          </Switch>
      </BrowserRouter>
   
  );
}

export default App;
