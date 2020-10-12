import React from 'react';
import { Switch, Route } from 'react-router-dom';
import './App.css';
import { AppBar, Button, Card, Icon, IconButton, TextField, Toolbar, Typography } from '@material-ui/core';
import Intro from './pages/Intro';
import Page2 from './pages/page2';
import Page3 from './pages/page3';
import Page4 from './pages/page4';
import Page5 from './pages/page5';

const App = () => {
  return (
    <div className="App">
      <Switch>
        <Route exact path='/' component={Intro} />
        <Route path='/page2' component={Page2} />
        <Route path='/page3' component={Page3} />
        <Route path='/page4' component={Page4} />
        <Route path='/page5' component={Page5} />
      </Switch>
    </div>

  );
}

export default App;
