import React, { Component } from 'react';
import '../../App.css';
import {
    Container, Col, Row
  } 
  from 'reactstrap';
import TradeSideBar from '../../components/TradeSideBar.js'
import axios from 'axios';


class TaggedItems extends Component {


    componentDidMount() {
        // performing a GET request to '/api-end-point'
        axios( {
          url: `http://localhost:5000/api/v1/item/show_all_items`,
          headers: { Authorization: `Bearer ${localStorage.getItem("JWT")}` },
          method: "get"
        }).then(result => {
          result.data.item.map(place =>
          {
              console.log(place.owner_location)
          })
        })
    }

    
  render() {
    return (
    <Container fluid>
      <Row>
          <Col className="SideBar" style={{backgroundColor: '#34495E', height: '100vh', overflow: 'hidden'}} sm ='2'>
            <TradeSideBar/>
          </Col>
          <Col style={{backgroundColor: '#34495E', height: '100vh', overflow: 'auto'}}>
            <h1>Tagged Items</h1>
          </Col>
      </Row>
        
    </Container>
    )
  }
}

export default TaggedItems;