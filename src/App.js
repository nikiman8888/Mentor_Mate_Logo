import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';
import Navigation from './components/Navigation/Navigation';

function App() {
  return (
      <BrowserRouter>
      <Navigation/>
          <Switch>
            <Route path = '/' exact component = {}/>
          </Switch>
      </BrowserRouter>
   
  );
}

export default App;
