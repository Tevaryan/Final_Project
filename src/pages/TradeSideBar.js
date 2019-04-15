import React, { Component } from 'react';
import {Link} from "react-router-dom"
import {
    Nav, NavItem, NavLink
  } 
  from 'reactstrap';


class TradeSideBar extends Component {
  render() {
    return (
        <Nav className="ml-auto" navbar>
            <NavItem className = 'Navbar_TradeMain'>
                <NavLink tag ={Link} to={`/Dashboard/TradeMain/MyFeed`}>My Feed</NavLink>
            </NavItem>
            <NavItem className = 'Navbar_TradeMain'>
                <NavLink tag ={Link} to={`/Dashboard/TradeMain/MyItems`}>My Items</NavLink>
            </NavItem>
            <NavItem className = 'Navbar_TradeMain'>
                <NavLink tag ={Link} to={`/Dashboard/TradeMain/TaggedItems`}>Tagged Items</NavLink>
            </NavItem>
            <NavItem className = 'Navbar_TradeMain'>
                <NavLink tag ={Link} to={`/Dashboard/TradeMain/ItemsNearYou`}>Items Near You!</NavLink>
            </NavItem>
        </Nav>
    )
  }
}

export default TradeSideBar;