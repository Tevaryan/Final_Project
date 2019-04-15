import React, { Component } from 'react';
import '../../App.css';
import {
    Container, Col, Form,
    FormGroup, Input,
    Button, Row
  } 
  from 'reactstrap';
import TradeSideBar from '../../components/TradeSideBar.js'


class ItemsNearYou extends Component {

    
  render() {
    return (
      <Container fluid>
      <Row>
          <Col className="SideBar" style={{backgroundColor: '#65cca9', height: '100vh', overflow: 'hidden'}} sm ='2'>
            <TradeSideBar/>
          </Col>
          <Col style={{backgroundColor: '#f2fffa', height: '100vh', overflow: 'auto'}}>
            <h1>Items Near You</h1>
          </Col>
      </Row>
        
    </Container>
    )
  }
}

export default ItemsNearYou;