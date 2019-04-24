import React, { Component } from 'react';
import '../../App.css';
import {
    Form, FormGroup, Label, Input, Modal
  } 
  from 'reactstrap';
import axios from 'axios';
import { Button } from 'react-bootstrap';


// import jacket from '../../assets/images/jacket.jpg'

class MapLocationFilter extends Component {
    constructor(props) {
        super(props);
    
        this.state = {
            city: '',
            country: '',
            preffered_location: '',
            form: false
        }
        this.toggle = this.toggle.bind(this);
      }
    
    toggle() {
        this.setState(prevState => ({
          form: !prevState.modal
        }));
    }
    
    handleCityChange = (event) => {
        this.setState({
            city: event.target.value
        })
        console.log(this.state.city)
    }

    handleCountryChange = (event) => {
        this.setState({
            country: event.target.value
        })
        console.log(this.state.country)
    }

    trigger = () => {
        
        axios( {
            url: `http://localhost:5000/api/v1/location/custom_map_location/${this.state.city} ${this.state.country}`,
            headers: { Authorization: `Bearer ${localStorage.getItem("JWT")}` },
            method: "post",
          })
          .then((response)=>{
            this.props.newLocation()
            this.props.toggle()
            // console.log(this.state.item)
          })
          .catch( (error)=> {
            console.log(error);
          });
    }


    render (){
        return (
            <div style={{ width: '100%'}}>
                <Form style={{ padding: '10px'}}>
                    <FormGroup>
                        <Label for="City">City</Label>
                        <Input type="text" value={this.state.city} onChange={this.handleCityChange} placeholder="Enter city name" />
                    </FormGroup>
                    <FormGroup>
                        <Label for="Country">Country</Label>
                        <Input type="text" value={this.state.country} onChange={this.handleCountryChange} placeholder="Enter country name" />
                    </FormGroup>
                    <Button onClick={this.trigger}>Submit</Button>
                </Form>
            </div>
        )
    }

}
export default MapLocationFilter