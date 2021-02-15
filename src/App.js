import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

// Components
import Header from './components/Header/Header';
import Sidebar from './components/Sidebar/Sidebar';
import Content from './hoc/Content';
import Chart from './components/Chart/Chart';
import Balance from './components/Balance/Balance';

import './css/App.css';


const App = () => {
  return (
    <Router>
      <div className="container">
        <Header />
        <Sidebar />
        <Switch>
          <Route path='/new' component={Content} />
          <Route path='/chart' component={Chart} />
          <Route path='/balance' component={Balance} />
        </Switch>
      </div>
    </Router>
  );
};


export default App;
