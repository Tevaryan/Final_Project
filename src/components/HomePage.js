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
        <Navbar>
            <NavbarBrand href="/"><p className="navbartext">BARTER</p></NavbarBrand>
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