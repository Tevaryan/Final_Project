import React, { Component } from 'react';
import './App.css';

import {Route} from "react-router-dom";
import Homepage from "./components/HomePage";
import Login from './containers/Login.js';
import Dashboard from './pages/Dashboard.js';
import MyFeed from './containers/Trade/MyFeed.js';
import MyItems from './containers/Trade/MyItems.js';
import ItemsNearYou from './containers/Trade/ItemsNearYou.js';
import Favourite from './containers/Trade/favourite.js'

// import SignUp from './containers/SignUp';
import ExchangeRequestList from "./containers/ExchangeRequest/ExchangeRequestList"
import Messages from './containers/Chatroom/Chatroom'
import MessageList from './containers/Chatroom/MessageList/MessageList'
import SearchItem from './containers/SearchItem/SearchItem'
import items from "./components/items.js";
import './components/css/homepage.css'
import Delivery from './pages/Delivery/Delivery'
import UserItem from "./containers/ExchangeRequest/userItem"
import ChooseItem from "./containers/ExchangeRequest/chooseItem"
import AgreementList from "./containers/Agreement/agreement"
import SetAmount from "./containers/ExchangeRequest/setAmount"


class App extends Component {

  render() 
  {
    return (
    <>
      <Route exact path={"/"} component={Homepage}/>
      {/* <Route path={"/signup"} component={SignUp}/> */}
      <Route path={'/login'} component={Login}/>
      <Route path ={'/Dashboard'} component={Dashboard}/>
      <Route path ={'/Dashboard/ExchangeRequestList'} component={ExchangeRequestList}/>
      <Route path ={'/Dashboard/Message/:id'} component={Messages}/>
      <Route path ={'/Dashboard/MessageList'} component={MessageList}/>
      <Route path= {'/Dashboard/TradeMain/MyFeed'} component={MyFeed} />
      <Route path= {'/Dashboard/Search/:item'} component={SearchItem} />
      <Route path={'/Dashboard/Delivery'} component={Delivery}/>
      <Route path= {'/Dashboard/TradeMain/MyItems'} component={MyItems} />
      <Route path= {'/Dashboard/TradeMain/favourite'} component={Favourite} />
      <Route path= {'/Dashboard/TradeMain/ItemsNearYou'} component={ItemsNearYou} />
      <Route path={'/Dashboard/TradeMain/Items'} component={items}/>
      <Route path={'/Dashboard/Item/:id'} component={UserItem}/>
      <Route path={'/Dashboard/ChooseItem/:id'} component={ChooseItem}/>
      <Route path={'/Dashboard/AgreementList'} component={AgreementList}/>
      <Route path={'/Dashboard/SetAmount'} component={SetAmount}/>


    </>
    )
  }
}

export default App;