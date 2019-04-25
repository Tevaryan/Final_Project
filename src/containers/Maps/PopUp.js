import React from 'react';
import axios from 'axios';
import Distance from '../Maps/distance.js'
import UserItemDisplay from './userItemDisplay.js'
import {
    Button, Modal
  } 
  from 'reactstrap';
import ReactMapboxGl, { Popup, Marker} from "react-mapbox-gl";


class PopUp extends React.Component{
    constructor(props){
        super(props)
        this.state ={
            place: '',
            user_item:'',
            modal: false
        }
        this.toggle = this.toggle.bind(this);
    }
    toggle() {
        this.setState(prevState => ({
          modal: !prevState.modal
        }));
    }

    componentDidMount(){
        console.log(this.props.location)
        axios.get(`https://maps.googleapis.com/maps/api/geocode/json?latlng=${this.props.location[1]},${this.props.location[0]}&key=AIzaSyABpJnHD8sFlbKFmbQ4wgfTEqat3AjGqY0`)
        .then(result => {
            // If successful, we do stuffs with 'result'
            this.setState({
                 place: result.data.plus_code.compound_code
                 })
            })
        .catch(error => {
            // If unsuccessful, we notify users what went wrong
            console.log('ERROR: ', error)
        })
        axios( {
            url: `http://localhost:5000/api/v1/item/show_user_item/${this.props.user_id}`,
            headers: { Authorization: `Bearer ${localStorage.getItem("JWT")}` },
            method: "get",
          })
        .then(result => {
                // If successful, we do stuffs with 'result'
                this.setState({
                    user_item: result
                })
                console.log(this.state.user_item)
            })
        .catch(error => {
                // If unsuccessful, we notify users what went wrong
                console.log('ERROR: ', error)
                })
    }
    
    render() {
        return (
            <>
            {
                this.state.place ? 
                <Popup
                coordinates={this.props.location}
                offset={{
                'bottom-left': [12, -38],  'bottom': [0, -38], 'bottom-right': [-12, -38]
                    }}>
                    <div width="200px">
                    <div className="text-right">
                        <button onClick = {() => {this.props.clickedAgain(this.props.location)}} >x</button>
                    </div>
                    {
                        this.state.user_item ?
                        <div width='100px'>
                            <h6>{this.state.user_item.data.item[0].owner_name}</h6>
                        </div>:
                        null
                    }
                    <hr/>
                    {

                        this.state.user_item ?
                            this.state.user_item.data.item.map(item => 
                            <div className="mt-2" overflow-y="scroll">
                                <Button color="success" onClick={this.toggle}>{item.item_name}</Button>
                                <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
                                    <UserItemDisplay item={item}/>
                                </Modal>
                            </div>
                            ): 
                        null


                    }

                    <hr/>
                    <Distance start={this.props.start} destination={this.state.place}/>
                    </div>
                </Popup> :
                null
            }
            </>
        )
    }
    
}

export default PopUp