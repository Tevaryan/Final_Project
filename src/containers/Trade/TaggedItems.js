import React, { Component } from 'react';
import '../../App.css';
import {
    Container, Col, Form,
    FormGroup, Input,
    Button, Row
  } 
  from 'reactstrap';
import TradeSideBar from '../../components/TradeSideBar.js'


class TaggedItems extends Component {

    
  render() {
    return (
    <Container fluid>
      <Row>
          <Col className="SideBar" style={{backgroundColor: '#65cca9', height: '100vh', overflow: 'hidden'}} sm ='2'>
            <TradeSideBar/>
          </Col>
          <Col style={{backgroundColor: '#f2fffa', height: '100vh', overflow: 'auto'}}>
            <h1>Tagged Items</h1>
          </Col>
      </Row>
        
    </Container>
    )
  }
}

export default TaggedItems;