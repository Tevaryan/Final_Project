import React, { Component } from 'react';
import {
    Container, Col, Form,
    FormGroup, Input,
    Button, Row
  } 
  from 'reactstrap';
import axios from 'axios';
import NavbarComponent from '../components/NavbarComponent.js'



class Dashboard extends Component {

  render() {
    return (
    <div>
        <NavbarComponent/>
    </div>
    )
  }
}

export default Dashboard;