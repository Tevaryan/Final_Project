import React, { Component } from 'react';
import {Link} from "react-router-dom"
import "./css/tradesidebar.css"
import {
    Nav, NavItem, 
  } 
  from 'reactstrap';
import SideBarProfile from "../components/SideBarProfile";


class TradeSideBar extends Component {
  render() {
    return (
      <div>
        <SideBarProfile/>
        <br/>
        <br/>
        <br/>
        <Nav  className="ml-auto my-border my-danger" navbar>
            <NavItem className = 'Navbar_TradeMain'>
                <Link to={`/Dashboard/TradeMain/MyItems`} className="nav-link something">My Items</Link>
                <Link to={`/Dashboard/TradeMain/favourite`} className="nav-link something">Favourite</Link>
                <Link to={`/Dashboard/TradeMain/ItemsNearYou`} className="nav-link something">ItemsNearYou</Link>
            </NavItem>
        </Nav>  
          <br/>
      </div>
    )
  }
}

export default TradeSideBar;