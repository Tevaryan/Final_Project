import React, { Component } from 'react';
import './App.css';
import {Route} from "react-router-dom"
import Login from './containers/Login.js'
import Dashboard from './pages/Dashboard.js'

import MyFeed from './containers/Trade/MyFeed.js'
import MyItems from './containers/Trade/MyItems.js'
import TaggedItems from './containers/Trade/TaggedItems.js'
import ItemsNearYou from './containers/Trade/ItemsNearYou.js'

class App extends Component {
  render() 
  {
    return (
    <div>
      <Route exact path={'/login'} component={Login}/>
      <Route path ={'/Dashboard'} component={Dashboard}/>
      <Route path= {'/Dashboard/TradeMain/MyFeed'} component={MyFeed} />
      <Route path= {'/Dashboard/TradeMain/MyItems'} component={MyItems} />
      <Route path= {'/Dashboard/TradeMain/TaggedItems'} component={TaggedItems} />
      <Route path= {'/Dashboard/TradeMain/ItemsNearYou'} component={ItemsNearYou} />
    </div>
    )
  }
}

export default App;