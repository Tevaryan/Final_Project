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
import {Link} from "react-router-dom"

class NavbarComponent extends Component {
    constructor(props) {
        super(props);
    
        this.toggle = this.toggle.bind(this);
        this.state = {
          isOpen: false
        };
      }
      toggle() {
        this.setState({
          isOpen: !this.state.isOpen
        });
      }

  render() {
    return (
        <div>
        <Navbar style={{backgroundColor: '#7FFFD4'}} light expand="md">
          <NavbarBrand href="/">BARTER</NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
              <NavItem className = 'Navbar_TradeMain'>
                <NavLink tag ={Link} to={`/Dashboard/TradeMain/MyFeed`}>TRADE</NavLink>
              </NavItem>
              <NavItem className = 'Navbar_Delivery'>
                <NavLink tag ={Link} to={`/Dashboard/page2`}>DELIVERY</NavLink>
              </NavItem>
              
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
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    )
  }
}

export default NavbarComponent;