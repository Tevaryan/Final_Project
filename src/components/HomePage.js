import React, { Component } from 'react';

import {
    Navbar,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    } from 'reactstrap';
import {Link} from "react-router-dom";
import Logo from "../assets/images/logo.jpg"

import SignUp from '../containers/SignUp'



class HomePage extends Component {
    constructor(props) {
        super(props);
    
        this.toggle = this.toggle.bind(this);
        this.state = {
            isOpen: false,
            logout: false,
            ismodal: false
        };
        }
        toggle() {
        this.setState({
            isOpen: !this.state.isOpen
        });
        }

        modalHandler=()=>(
            this.setState({
                ismodal: !this.state.ismodal
            })
        )


    render() {
        let signup = this.state.ismodal?  <SignUp modal={this.modalHandler}/>: null
    return (
        <>
        {signup}
        <div id="root2">
            <Navbar className="navbar">
                <NavbarBrand href="/"><img src={Logo} className="navbarlogo" alt="test"></img></NavbarBrand>
                <Nav>
                    <NavItem>
                        <NavLink tag ={Link} to={`/`}><p className="navbartext">What is Barter</p></NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink tag ={Link} to={`/login`}><p className="navbartext">Sign In</p></NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink onClick={this.modalHandler} style={{cursor:'pointer'}}><p className="navbartext">Sign Up</p></NavLink>
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
                    <input type="text" placeholder="Search.." name="search" className="searchinput"></input>
                    <button type="submit" className="searchbarbutton">🔎</button>
                </form>
            </div>
        </div>
        </>
    )
    }
}

export default HomePage;