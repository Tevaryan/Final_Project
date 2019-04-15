import React, { Component } from 'react';
import satan from '../assets/images/satan.jpg'
import './css/items.css'
import {
    Container, Col, Form,
    FormGroup, Input,
    Button, Row
  } 
  from 'reactstrap';

import TradeSideBar from './TradeSideBar.js'


class Items extends Component {

    
  render() {
    return (
    <Container fluid>
      <Row>
          <Col className="SideBar" style={{backgroundColor: '#65cca9', height: '100vh', overflow: 'hidden'}} sm ='2'>
            <TradeSideBar/>
          </Col>
          <Col style={{backgroundColor: '#f2fffa', height: '100vh', overflow: 'auto'}}>
                    <div className="container">
                        <img className="image" src={satan}/>
                        <div className="description">
                            <p className="name">Hail Satan</p>
                            <p className="price">USD 1,000</p>
                            <p className="descriptionOne">Description</p>
                            <p className="descriptionTwo">This picture can summon demon from hell</p>
                            <p className="more">more</p>
                            <button className="buttonSomething">Something</button>
                            <div className="favouriteAndShare">
                                <button className="buttonFavourite">Favourite</button>
                                <button className="buttonShare">Share</button>
                            </div>
                        </div>
                    </div>
          </Col>
      </Row>
        
    </Container>
    )
  }
}

export default Items;
