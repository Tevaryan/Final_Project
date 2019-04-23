import React, { Component } from 'react';
import ReactMapboxGl, { Layer, Feature} from "react-mapbox-gl";
import axios from 'axios';
import Geocoding from '../Maps/geocoding.js'
import PopUp from '../Maps/PopUp.js'
import '../../App.css';
import {
    Container, Col, Row
  } 
  from 'reactstrap';
import TradeSideBar from '../../components/TradeSideBar.js'

const Map = ReactMapboxGl({
  accessToken: "pk.eyJ1IjoidGV2YW5pdW0iLCJhIjoiY2p1aW5maWNuMWNudDQzcHBva3d0dWN1YyJ9.WUbs5F9YLjZGQSaXEmiW9w"
});

class ItemsNearYou extends Component {
  state ={
    locateUser: '',
    userLocationLng: '',
    userLocationLat: '',
    isClicked: false,
    locations: [],
    clickedLocation: []
  }

  componentDidMount() {
    // performing a GET request to '/api-end-point'
      axios({method: "get", 
        url:'http://localhost:5000/api/v1/users/new/show_profilepag', 
        headers: { Authorization: `Bearer ${localStorage.getItem("JWT")}` } })
      .then(result => 
            {
              axios.get(`https://maps.googleapis.com/maps/api/geocode/json?address=${result.data.user.location}&key=AIzaSyBegd88Ui9QNpNcvSdNQlQNRx8kTPx4DAw`)
              .then(result => {
                // If successful, we do stuffs with 'result'
                this.setState({
                  userLocationLng: result.data.results[0].geometry.location.lng,
                  userLocationLat: result.data.results[0].geometry.location.lat,
                  locateUser: result.data.results[0].formatted_address
                })
                console.log(this.state.LocateUser)
              })
              .catch(error => {
                // If unsuccessful, we notify users what went wrong
                console.log('ERROR: ', error)
              })
            }
      )
      
  }

    getLocation = (lng, lat) => {
      let newLocation = [lng,lat]
      this.setState(
        {
          locations: [...this.state.locations, newLocation]
        }
      )
    }

    clicked = (location) =>{
      this.setState({
        clickedLocation: [...this.state.clickedLocation, location]
      })
    }
    
    clickedAgain = (location) =>{
      let newClickedLocation = this.state.clickedLocation.filter((locations) => {
        if (locations != location ){
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
          <Map
           style="mapbox://styles/mapbox/dark-v9"
           containerStyle={{
             height: "80vh",
             width: "80vw"
           }}
           center={[this.state.userLocationLng,this.state.userLocationLat]}
           movingMethod='easeTo'>
             <Layer
               type="symbol"
               id="ItemLocation"
               layout={{ "icon-image": "marker-15" }}>
               {
                 this.state.locations.map(location =>
                   <Feature coordinates={location} onClick = {() => {this.clicked(location)}}/>
                 )
               }
             </Layer>
             <Layer type="symbol"
               id="userLocation"
               layout={{"icon-image": "harbor-15"}}>
               
               <Feature coordinates = {[this.state.userLocationLng, this.state.userLocationLat]}/>

             </Layer>
             {
               this.state.clickedLocation.map(location => 
                 <PopUp location={location} clickedAgain = {this.clickedAgain} start={this.state.locateUser}/> 
               )             
             }

            </Map>
            <Geocoding getLocation={this.getLocation} locateUser = {this.state.locateUser}/>
          {/* <Route path ={'/geocoding'} component={Geocoding}/> */}
          </div>
          </Col>
      </Row>
        
    </Container>
    )
  }
}

export default ItemsNearYou;