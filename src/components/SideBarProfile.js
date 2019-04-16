import React, { Component } from 'react';
import picture from "../assets/images/satan.jpg";
import "../components/css/tradesidebar.css";



class SideBarProfile extends Component {
  render() {
    return (
      <div className="sidebarprofile">
        <img src={picture} className="sidebarprofileimg"></img>
        <p className="sidebarname">Satan</p>
        <p className="items">666 Items</p>
        <p className="location">Location : Hell</p>
      </div>
    )
  }
}

export default SideBarProfile;