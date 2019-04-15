import React, { Component } from 'react';
import {
    Container, Col, Form,
    FormGroup, Input,
    Button, Row,Nav,NavItem, NavLink
  } 
  from 'reactstrap';
import TradeSideBar from './TradeSideBar.js'
import {Route} from "react-router-dom"
import MyFeed from './MyFeed.js'
import MyItems from './MyItems.js'
import ItemsNearYou from './ItemsNearYou.js'
import TaggedItems from './TaggedItems.js'


class TradeMain extends Component {
  render() {
    return (
    <Container fluid>
        <Row>
          <Col className="SideBar" style={{backgroundColor: '#65cca9', height: '100vh', overflow: 'hidden'}} sm ='2'>
            <TradeSideBar/>
          </Col>
          <Col style={{backgroundColor: '#f2fffa', height: '100vh', overflow: 'auto'}}>
            <Route path= {'/Dashboard/TradeMain/MyFeed'} component={MyFeed} />
            <Route path= {'/Dashboard/TradeMain/MyItems'} component={MyItems} />
            <Route path= {'/Dashboard/TradeMain/TaggedItems'} component={TaggedItems} />
            <Route path= {'/Dashboard/TradeMain/ItemsNearYou'} component={ItemsNearYou} />
          </Col>
        </Row>
    </Container>
    )
  }
}

export default TradeMain;