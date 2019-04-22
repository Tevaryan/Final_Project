import React, { Component } from 'react';
import Backdrop from '../components/Backdrop/Backdrop'
import LocationFilter from '../containers/LocationFilter/locationFilter'
import Categorylogo from "../assets/images/category.jpg"

import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    UncontrolledDropdown,
    Dropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem } from 'reactstrap';
import {Link, Redirect} from "react-router-dom";
import "../components/css/navbarcomponent.css"
import Homelogo from "../assets/images/homebuttonblue.jpg"
import Messagelogo from "../assets/images/message.jpg"
import Logoutlogo from "../assets/images/logout.jpg"

class NavbarComponent extends Component {
    constructor(props) {
        super(props);
    
        this.toggle = this.toggle.bind(this);
        this.state = {
          isOpen: false,
          logout: false,
          backdrop: false,
          backdrop2: false
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

      closedropdown2=()=>{
        this.setState({
          backdrop2:!this.state.backdrop2
        })
        const dropdown = document.getElementById('target2')
        dropdown.classList.remove('show')
      }

      
      // drop down filter options when mousehover
      overHandler2=()=>{
        // setTimeout(()=>{
          const dropdown = document.getElementById('target2')
          dropdown.classList.add('show')
          this.setState({
            backdrop2:!this.state.backdrop2
          })
        // }, 200)
      }

      // when click dropdown
      dropdownClick2=()=>{ 
        const dropdown = document.getElementById('target2')
        dropdown.classList.remove('show')
        this.setState({
          backdrop2:!this.state.backdrop2
        })
      }

      logoutHandler = () =>{
        localStorage.removeItem("JWT")
        localStorage.removeItem('profile_picute')
        localStorage.removeItem("user_id")
        localStorage.removeItem("username")
        localStorage.removeItem("location")
        localStorage.removeItem("destination")
        this.setState({logout: true})
      }

  render() {
    let backdrop;
    if(this.state.backdrop){
      backdrop = <Backdrop backdrop={this.dropdownClick}/>
    }
    else if(this.state.backdrop2){
      backdrop = <Backdrop backdrop={this.dropdownClick2}/>
    }
    else{
      backdrop = null
    }
    
    if(this.state.logout ===true){
      return <Redirect to="/login"/>
    }
    return (
        <div>
        {backdrop}
        <Navbar style={{backgroundColor: '#5D6D7E'}} light expand="sm" className='pb-0' className="containertopnavbar">
          <NavbarBrand href="/Dashboard/TradeMain/MyFeed" className="buttonhome"><img src={Homelogo} className="homelogo"></img></NavbarBrand>
          <NavbarBrand href="/Dashboard/messageList" className="buttonmessage"><img src={Messagelogo} className="messagelogo"></img></NavbarBrand>
          
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>

          <div className= "container5">
            <form action="/">
              <input type="text" placeholder="  Search.." name="search" className='searchbar'></input>
              <button type="submit" className="searchbarbutton">🔎</button>
            </form>
          </div>
           {/* for fiter thing  */}
            <UncontrolledDropdown nav inNavbar className={'list-unstyled text-white ml-5'}>
                <div nav caret onMouseOver={this.overHandler} className={'text-white ml-5'} className="categorybutton">
                  <img src={Categorylogo} className="categorylogo"></img>
                  <strong>Category</strong>
                </div> 
                <div >
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
              <Dropdown nav inNavbar className={'text-white ml-5 list-unstyled'}>
                <div nav caret onMouseOver={this.overHandler2} className={'text-white'}  className="city">
                  <strong>📍Location</strong>
                </div> 
                <div>
                  <DropdownMenu id='target2'  onMouseLeave={this.closedropdown2} >
                    <LocationFilter >Show Filter</LocationFilter>
                  </DropdownMenu>
                </div>
              </Dropdown>
            <Nav className="ml-auto" navbar>
              <NavItem className = 'Navbar_TradeMain'>
                <NavLink tag ={Link} to={`/Dashboard/TradeMain/MyFeed`} className="tradebutton"><p className="taobutton">Tao click here</p></NavLink>
              </NavItem>
              <NavItem className = 'Navbar_Delivery'>
                <NavLink tag ={Link} to={`/Dashboard/page2`} onClick={this.logoutHandler} >
                <div>
                  <p className="logoutbutton">LOGOUT</p>
                </div>
                </NavLink>
              </NavItem>
              
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    )
  }
}

export default NavbarComponent;