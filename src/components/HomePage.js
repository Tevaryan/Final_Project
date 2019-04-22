import React, { Component } from 'react';

import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    } from 'reactstrap';
import {Link} from "react-router-dom";
import Logo from "../assets/images/logo.jpg"



class HomePage extends Component {
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

    render() {
    
    
    return (
        <div id="root2">
        <Navbar className="navbar">
            <NavbarBrand href="/"><img src={Logo} className="navbarlogo"></img></NavbarBrand>
            <Nav>
                <NavItem>
                    <NavLink tag ={Link} to={`/`}><p className="navbartext">What is Barter</p></NavLink>
                </NavItem>
                <NavItem>
                    <NavLink tag ={Link} to={`/`}><p className="navbartext">Sign Up</p></NavLink>
                </NavItem>
                <NavItem>
                    <NavLink tag ={Link} to={`/`}><p className="navbartext">Sign In</p></NavLink>
                </NavItem>
            </Nav>
        </Navbar>
        <div className="container3">
            <p>TRADE. </p>
            <p>DELIVER. </p>
            <p>TRAVEL. </p>
        </div>
        <h2 className="container2">
            some words.
        </h2> 
        <div className= "container4">
            <form action="/">
            <input type="text" placeholder="Search.." name="search"></input>
            <button type="submit" className="searchbarbutton">Go!</button>
            </form>
        </div>
        
        </div>
    )
    }
}

export default HomePage;