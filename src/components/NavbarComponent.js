import React, { Component } from 'react';
import Backdrop from '../components/Backdrop/Backdrop'

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
// import {DropdownButton,Dropdown} from 'react-bootstrap'

class NavbarComponent extends Component {
    constructor(props) {
        super(props);
    
        this.toggle = this.toggle.bind(this);
        this.state = {
          isOpen: false,
          logout: false,
          backdrop: false
        };
      }
      toggle() {
        this.setState({
          isOpen: !this.state.isOpen
        });
      }

      closedropdown=()=>{
        this.setState({
          backdrop:!this.state.backdrop
        })
        const dropdown = document.getElementById('target')
        dropdown.classList.remove('show')
      }

      
      // drop down filter options when mousehover
      overHandler=()=>{
        // setTimeout(()=>{
          const dropdown = document.getElementById('target')
          dropdown.classList.add('show')
          this.setState({
            backdrop:!this.state.backdrop
          })
        // }, 200)
      }

      // when click dropdown
      dropdownClick=()=>{ 
        const dropdown = document.getElementById('target')
        dropdown.classList.remove('show')
        this.setState({
          backdrop:!this.state.backdrop
        })
      }

      logoutHandler = () =>{
        localStorage.removeItem("JWT")
        localStorage.removeItem('profile_picute')
        localStorage.removeItem("user_id")
        localStorage.removeItem("username")
        this.setState({logout: true})
      }

  render() {
    let backdrop;
    if(this.state.backdrop){
      backdrop = <Backdrop backdrop={this.dropdownClick}/>
    } else{
      backdrop = null
    }
    
    if(this.state.logout ===true){
      return <Redirect to="/login"/>
    }
    return (
        <div>
        {backdrop}
        <Navbar style={{backgroundColor: '#5D6D7E'}} light expand="sm" className='pb-0'>
          <NavbarBrand href="/Dashboard/TradeMain/MyFeed">BARTER</NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
           {/* for fiter thing  */}
           <UncontrolledDropdown id='target2' nav inNavbar className={'list-unstyled text-white ml-5'}>
                <DropdownToggle nav caret onMouseOver={this.overHandler} className={'text-white ml-5'}>
                  <strong>Search</strong>
                </DropdownToggle> 
                <div onMouseLeave={this.closeBackdrop}>
                <DropdownMenu id='target'  onMouseLeave={this.closedropdown}>
                <Link to={`/Dashboard/Search/Arts & Craft`}><DropdownItem>Arts & Craft</DropdownItem></Link>
                <Link to={`/Dashboard/Search/Automative`}><DropdownItem>Automative</DropdownItem></Link>
                <Link to={`/Dashboard/Search/Baby`}><DropdownItem>Baby</DropdownItem></Link>
                <Link to={`/Dashboard/Search/Beuty & Personal Care`}><DropdownItem>Beuty & Personal Care</DropdownItem></Link>
                <Link to={`/Dashboard/Search/Books`}><DropdownItem>Books</DropdownItem></Link>
                <Link to={`/Dashboard/Search/Computers`}><DropdownItem>Computers</DropdownItem></Link>
                <Link to={`/Dashboard/Search/Health & Household`}><DropdownItem>Health & Household</DropdownItem></Link>
                <Link to={`/Dashboard/Search/Electronics`}><DropdownItem>Electronics</DropdownItem></Link>
                <Link to={`/Dashboard/Search/Home & Kitchen`}><DropdownItem>Home & Kitchen</DropdownItem></Link>
                <Link to={`/Dashboard/Search/Luggage`}><DropdownItem>Luggage</DropdownItem></Link>
                <Link to={`/Dashboard/Search/Sports & Outdoors`}><DropdownItem>Sports & Outdoors</DropdownItem></Link>
                <Link to={`/Dashboard/Search/Toys`}><DropdownItem>Toys</DropdownItem></Link>
                </DropdownMenu>
                </div>
              </UncontrolledDropdown>
            <Nav className="ml-auto" navbar>
              <NavItem className = 'Navbar_TradeMain'>
                <NavLink tag ={Link} to={`/Dashboard/TradeMain/MyFeed`}>TRADE</NavLink>
              </NavItem>
              <NavItem className = 'Navbar_Delivery'>
                <NavLink tag ={Link} to={`/Dashboard/messageList`}>Messages</NavLink>
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