import React, { Component } from 'react';
import {
    Container, Col, Form,
    FormGroup, Input,
    Button, Row
  } 
  from 'reactstrap';
import NavbarComponent from '../components/NavbarComponent.js'



class Dashbaord extends Component {
  render() {
    return (
    <div>
        <NavbarComponent/>
    </div>
    )
  }
}

export default Dashbaord;