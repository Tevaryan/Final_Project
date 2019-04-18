import React, { Component } from 'react';
import '../../App.css';
import {
    Container, Col, Row
  } 
  from 'reactstrap';
import TradeSideBar from '../../components/TradeSideBar.js'


class ItemsNearYou extends Component {

    
  render() {
    return (
      <Container fluid>
      <Row>
          <Col className="SideBar" style={{backgroundColor: '#f5f5f5', height: '100vh', overflow: 'hidden'}} sm ='2'>
            <TradeSideBar/>
          </Col>
          <Col style={{backgroundColor: '#34495E', height: '100vh', overflow: 'auto'}}>
            <h1>Items Near You</h1>
          </Col>
      </Row>
        
    </Container>
    )
  }
}

export default ItemsNearYou;