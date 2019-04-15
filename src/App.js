import React, { Component } from 'react';
import './App.css';
import {Route} from "react-router-dom"
import Login from './pages/Login.js'
import Dashboard from './pages/Dashboard.js'
import TradeMain from './pages/TradeMain.js'


class App extends Component {
  render() 
  {
    return (
    <div>
      <Route exact path={'/login'} component={Login}/>
      <Route path ={'/Dashboard'} component={Dashboard}/>
      <Route path= {'/Dashboard/TradeMain'} component={TradeMain} />
    </div>
    )
  }
}

export default App;