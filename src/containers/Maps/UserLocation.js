import React, { Component } from 'react';
import ReactMapboxGl, { Layer, Feature, Popup} from "react-mapbox-gl";
import {
    Button, Modal
  } 
  from 'reactstrap';
import axios from 'axios';
import Geocoding from './geocoding.js'
import PopUp from './PopUp.js'
import MapLocationFilter from '../LocationFilter/mapLocationFilter.js'
import ItemFilter from './itemFilter.js'
import FilteredLocationGeocoding from './filteredLocationGeocode.js'
import '../../App.css';


const Map = ReactMapboxGl({
  accessToken: "pk.eyJ1IjoidGV2YW5pdW0iLCJhIjoiY2p1aW5maWNuMWNudDQzcHBva3d0dWN1YyJ9.WUbs5F9YLjZGQSaXEmiW9w"
});

class UserLocation extends Component {
    constructor(props){
    super(props);
        this.state ={
            locateUser: '',
            userLocationLng: '',
            userLocationLat: '',
            currentCenterLng: '',
            currentCenterLat:'',
            customLocationLng: '',
            customLocationLat: '',
            isClicked: false,
            locations: [],
            clickedLocation: [],
            modal: false,
            dropdownlist: false,
            showFilteredLocation: false,
            showAll: true,
            parent_tag: '',
            child_tag: ''
        }
    }

    toggle = () => {
        this.setState(prevState => ({
          modal: !prevState.modal
        }));
    }

    toggledropdown = () => {
      this.setState({
        dropdownlist: !this.state.dropdownlist
      });
    }

  componentDidMount() {
      axios({method: "get", 
        url:'http://localhost:5000/api/v1/users/new/show_profilepag', 
        headers: { Authorization: `Bearer ${localStorage.getItem("JWT")}` } })
      .then(result => 
            {
              axios.get(`https://maps.googleapis.com/maps/api/geocode/json?address=${result.data.user.location}&key=AIzaSyBegd88Ui9QNpNcvSdNQlQNRx8kTPx4DAw`)
              .then(result => {
                this.setState({
                  userLocationLng: result.data.results[0].geometry.location.lng,
                  userLocationLat: result.data.results[0].geometry.location.lat,
                  currentCenterLng: result.data.results[0].geometry.location.lng,
                  currentCenterLat: result.data.results[0].geometry.location.lat,
                  locateUser: result.data.results[0].formatted_address
                })
              })
              .catch(error => {
                console.log('ERROR: ', error)
              })
            }
        )  
    }

    getCustomLocation = () => {
        axios({method: "get", 
        url:'http://localhost:5000/api/v1/location/custom_map_location', 
        headers: { Authorization: `Bearer ${localStorage.getItem("JWT")}` } })
        .then(result => 
            {
              axios.get(`https://maps.googleapis.com/maps/api/geocode/json?address=${result.data.user.custom_location}&key=AIzaSyBegd88Ui9QNpNcvSdNQlQNRx8kTPx4DAw`)
              .then(result => {
                this.setState({
                  userLocationLng: result.data.results[0].geometry.location.lng,
                  userLocationLat: result.data.results[0].geometry.location.lat,
                  currentCenterLng: result.data.results[0].geometry.location.lng,
                  currentCenterLat: result.data.results[0].geometry.location.lat,
                  locateUser: result.data.results[0].formatted_address
                })
              })
              .catch(error => {
                console.log('ERROR: ', error)
              })
            })
        }
    
    reCenterOnUserLocation = () =>{
        axios({method: "get", 
        url:'http://localhost:5000/api/v1/users/new/show_profilepag', 
        headers: { Authorization: `Bearer ${localStorage.getItem("JWT")}` } })
        .then(result => 
            {
              axios.get(`https://maps.googleapis.com/maps/api/geocode/json?address=${result.data.user.location}&key=AIzaSyBegd88Ui9QNpNcvSdNQlQNRx8kTPx4DAw`)
              .then(result => {
                this.setState({
                  userLocationLng: result.data.results[0].geometry.location.lng,
                  userLocationLat: result.data.results[0].geometry.location.lat,
                  currentCenterLng: result.data.results[0].geometry.location.lng,
                  currentCenterLat: result.data.results[0].geometry.location.lat,
                  locateUser: result.data.results[0].formatted_address
                })
              })
              .catch(error => {
                console.log('ERROR: ', error)
              })
            }
        )  

    }
 
    getLocation = (user_id, lng, lat) => {
      let newLocation = {
          user: user_id, 
          coord: [lng,lat]
        }
      this.setState(
        {
          locations: [...this.state.locations, newLocation]
        }
      )
    }

    clicked = (location) => {
      this.setState({
        clickedLocation: [...this.state.clickedLocation, location]
      })
      this.setState({
          currentCenterLat: location.coord[1],
          currentCenterLng: location.coord[0]
      })
    }

    reCenter = () =>{
        this.setState({
            currentCenterLat: this.state.userLocationLat,
            currentCenterLng: this.state.userLocationLng
        })
    }    

    clickedAgain = (location) =>{
      let newClickedLocation = this.state.clickedLocation.filter((locations) => {
        if (locations.coord != location ){
          return this.state.clickedLocation
        }
      })
      this.setState({
        clickedLocation: newClickedLocation
      })
    }

    filterLocations = (parent,child) => {
      this.setState({ parent_tag: parent,
                      child_tag: child,
                    showFilteredLocation: true,
                    showAll: false,
                    locations: []
                   })
    }
    
    getAllItemLocation = ()=> {
      console.log(this.state.locations)
      this.setState({showAll: true,
                      showFilteredLocation: false,
                      locations: []})
    }


    clearFilterLocations = () => {
      this.setState({ parent_tag: '',
                      child_tag: ''})
    }
    
  render() {
    return (
        <div>
            <Map
             style="mapbox://styles/mapbox/dark-v9"
             containerStyle={{
               height: "80vh",
               width: "80vw"
             }}
             id = "Map"
             center={[this.state.currentCenterLng,this.state.currentCenterLat]}
             movingMethod='easeTo'>
               <Layer
                 type="symbol"
                 id="ItemLocation"
                 layout={{ "icon-image": "marker-15" }}>
                 {
                   this.state.locations.map(location =>
                     <Feature coordinates={location.coord} onClick = {() => {this.clicked(location)}}/>
                   )
                 }
               </Layer>
               <Layer type="symbol"
                 id="userLocation"
                 layout={{"icon-image": "harbor-15"}}>
                 <Feature onClick = {this.reCenter} coordinates = {[this.state.userLocationLng, this.state.userLocationLat]}/>
               </Layer>
                {
                    this.state.clickedLocation.map(location => 
                    <PopUp location={location.coord} user_id={location.user} clickedAgain = {this.clickedAgain} start={this.state.locateUser}/> 
                    )             
                }
              </Map>
              {/* {
                this.state.showFilteredLocation ?
                <FilteredLocationGeocoding getLocation={this.getLocation} parent={this.state.parent_tag} child={this.state.child_tag}/>:
                  <Geocoding getLocation={this.getLocation}/> 
              } */}
              
              <Modal isOpen={this.state.dropdownlist} toggle={this.toggledropdown}>
                <ItemFilter filteredLocations = {this.filterLocations} toggle={this.toggledropdown}></ItemFilter>
              </Modal>
                  {
                    this.state.child_tag && this.state.showFilteredLocation?
                    <FilteredLocationGeocoding getLocation={this.getLocation} clearLocations={this.clearFilterLocations} parent={this.state.parent_tag} child={this.state.child_tag}/>:
                    this.state.showAll?
                    <Geocoding getLocation={this.getLocation}/>:
                    null

                  }
              <Button color="success mt-2 mr-2" onClick={this.toggle}>Custom Location</Button>
              <Button color="success mt-2 mr-2" onClick={this.reCenterOnUserLocation}>Center</Button>
              <Button color="success mt-2 mr-2" onClick={this.toggledropdown}>Filter Items</Button>
              <Button color="success mt-2 mr-2" onClick={this.getAllItemLocation} disabled={this.state.showAll}>Show all</Button>
              <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
                <MapLocationFilter toggle={this.toggle} newLocation={this.getCustomLocation}></MapLocationFilter>
              </Modal>
              <Modal isOpen={this.state.dropdownlist} toggle={this.toggledropdown}>
                <ItemFilter filteredLocations = {this.filterLocations} toggle={this.toggledropdown}></ItemFilter>
              </Modal>


        </div>
    )
  }
}

export default UserLocation;