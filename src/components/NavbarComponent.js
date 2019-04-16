import React, { Component } from 'react';

import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    UncontrolledDropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem } from 'reactstrap';
import {Link, Redirect} from "react-router-dom";


class NavbarComponent extends Component {
    constructor(props) {
        super(props);
    
        this.toggle = this.toggle.bind(this);
        this.state = {
          isOpen: false,
          logout: false
        };
      }
      toggle() {
        this.setState({
          isOpen: !this.state.isOpen
        });
      }

      logoutHandler = () =>{
        localStorage.removeItem("JWT")
        localStorage.removeItem('profile_picute')
        localStorage.removeItem("user_id")
        localStorage.removeItem("username")

        this.setState({logout: true})
      }

  render() {
    
    if(this.state.logout ===true){
      return <Redirect to="/login"/>
    }
    return (
        <div>
        <Navbar style={{backgroundColor: '#5D6D7E'}} light expand="md">
          <NavbarBrand href="/">BARTER</NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
              <UncontrolledDropdown nav inNavbar>
                <DropdownToggle nav caret>
                  Notifications
                </DropdownToggle>
                <DropdownMenu right>
                  <DropdownItem>
                    Messages
                  </DropdownItem>
                  <DropdownItem>
                    Alerts
                  </DropdownItem>
                </DropdownMenu>
              </UncontrolledDropdown>
              <NavItem className = 'Navbar_TradeMain'>
                <NavLink tag ={Link} to={`/Dashboard/TradeMain/MyFeed`}>TRADE</NavLink>
              </NavItem>
              <NavItem className = 'Navbar_Delivery'>
                <NavLink tag ={Link} to={`/Dashboard/page2`}>DELIVERY</NavLink>
              </NavItem>
              <NavItem className = 'Navbar_Delivery'>
                <NavLink tag ={Link} to={`/Dashboard/page2`} onClick={this.logoutHandler}>LOG OUT</NavLink>
              </NavItem>
              
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    )
  }
}

export default NavbarComponent;