import React, { Component } from 'react';
import ReactMapboxGl, { Layer, Feature} from "react-mapbox-gl";
import axios from 'axios';
import Geocoding from '../Maps/geocoding.js'
import PopUp from '../Maps/PopUp.js'
import UserLocation from '../Maps/UserLocation.js'
import '../../App.css';
import {
    Container, Col, Row
  } 
  from 'reactstrap';
import TradeSideBar from '../../components/TradeSideBar.js'


class ItemsNearYou extends Component {

    clicked = (location) =>{
      this.setState({
        clickedLocation: [...this.state.clickedLocation, location]
      })
    }
    
    clickedAgain = (location) =>{
      let newClickedLocation = this.state.clickedLocation.filter((locations) => {
        
        if (locations !== location ){
          return this.state.clickedLocation
        }
      })

      this.setState({
        clickedLocation: newClickedLocation
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
          <div>
            <UserLocation></UserLocation>
          </div>
          </Col>
      </Row>
        
    </Container>
    )
  }
}

export default ItemsNearYou;