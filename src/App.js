import React, { Component } from 'react';
import './App.css';
import {Route} from "react-router-dom"
import Login from './containers/Login.js'
import Dashboard from './pages/Dashboard.js'
import MyFeed from './containers/Trade/MyFeed.js'
import MyItems from './containers/Trade/MyItems.js'
import TaggedItems from './containers/Trade/TaggedItems.js'
import ItemsNearYou from './containers/Trade/ItemsNearYou.js'
import SignUp from './containers/SignUp';
import Messages from './containers/Chatroom/Chatroom'
import MessageList from './containers/Chatroom/MessageList'
import items from "./components/items.js"



class App extends Component {
  render() 
  {
    return (
    <div>
      <Route path={"/signup"} component={SignUp}/>
      <Route exact path={'/login'} component={Login}/>
      <Route path ={'/Dashboard'} component={Dashboard}/>
      <Route path ={'/Dashboard/Message/:id'} component={Messages}/>
      <Route path ={'/Dashboard/MessageList'} component={MessageList}/>
      <Route path= {'/Dashboard/TradeMain/MyFeed'} component={MyFeed} />
      <Route path= {'/Dashboard/TradeMain/MyItems'} component={MyItems} />
      <Route path= {'/Dashboard/TradeMain/TaggedItems'} component={TaggedItems} />
      <Route path= {'/Dashboard/TradeMain/ItemsNearYou'} component={ItemsNearYou} />
      <Route path={'/Dashboard/TradeMain/Items'} component={items}/>
    </div>
    )
  }
}

export default App;