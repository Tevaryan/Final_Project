import React, { Component } from 'react';
import {Link, Redirect} from "react-router-dom";
import { UncontrolledDropdown, DropdownToggle, DropdownMenu, DropdownItem,NavItem,
    NavLink, } from 'reactstrap';
import MoreLogo from "../assets/images/menu.jpg"


class Menu extends Component{

        render() {
            return (
                <div className="ml-auto">
                    <UncontrolledDropdown>
                        <DropdownToggle className="HAHA">
                            <img src={MoreLogo} className="more"></img>
                        </DropdownToggle>
                        <DropdownMenu right>
                        <DropdownItem> 
                            <NavItem>
                                <NavLink tag ={Link} to={`/Dashboard/AgreementList`}>Agreement Requests</NavLink>
                            </NavItem>
                        </DropdownItem>
                        <DropdownItem divider />
                        <DropdownItem>
                            <NavItem >
                                <NavLink tag ={Link} to={`/Dashboard/ExchangeRequestList`}>Exchange Requests</NavLink>
                            </NavItem>
                        </DropdownItem>
                        <DropdownItem divider />
                            <DropdownItem>
                                <NavItem>
                                    <div onClick={this.props.logout} >
                                        <p className="logoutbutton">Logout</p>
                                    </div>
                                </NavItem>
                            </DropdownItem>
                        </DropdownMenu>
                    </UncontrolledDropdown>
                </div>
            );
        }
}

                
                




export default Menu;