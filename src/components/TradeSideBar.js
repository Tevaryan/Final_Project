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
                <Link to={`/Dashboard/TradeMain/MyFeed`} className="nav-link">My Feed</Link>        
            </NavItem>
            <NavItem className = 'Navbar_TradeMain'>
                <Link to={`/Dashboard/TradeMain/MyItems`} className="nav-link">My Items</Link>
            </NavItem>
            <NavItem className = 'Navbar_TradeMain'>
                <Link to={`/Dashboard/TradeMain/TaggedItems`} className="nav-link">TaggedItems</Link>
            </NavItem>
            <NavItem className = 'Navbar_TradeMain'>
            <Link to={`/Dashboard/TradeMain/ItemsNearYou`} className="nav-link">ItemsNearYou</Link>
            </NavItem>
        </Nav>
    )
  }
}

export default TradeSideBar;