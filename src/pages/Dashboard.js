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



  // componentDidMount() {

  //     axios.get(`http://localhost:5000/api/v1/users`)
  //     .then(result => {
  //         console.log(result)
          
  //     })
  //     .catch(error => {
  //         console.log('ERROR: ', error)
  //     })
  //     }
    
  render() {
    return (
    <div>
        <NavbarComponent/>
    </div>
    )
  }
}

export default Dashboard;