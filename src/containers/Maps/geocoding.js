import React, { Component }  from 'react';
import axios from 'axios';


class Geocoding extends Component{
    constructor(props){
        super(props)
    }

    componentDidMount() {
        // performing a GET request to '/api-end-point
            axios( {
              url: `http://localhost:5000/api/v1/item/show_all_items`,
              headers: { Authorization: `Bearer ${localStorage.getItem("JWT")}` },
              method: "get"
            }).then((result) => {
                result.data.item.map(place =>
                    {
                        axios.get(`https://maps.googleapis.com/maps/api/geocode/json?address=${place.owner_location}&key=AIzaSyCz2XfFOJs5LX94xX69vyj0TqZOmsw6p1c`)
                        .then(result => {
                        const user_id = place.owner_user_id
                        // If successful, we do stuffs with 'result'
                        this.props.getLocation(user_id, result.data.results[0].geometry.location.lng, result.data.results[0].geometry.location.lat)
                        })
                        .catch(error => {
                        // If unsuccessful, we notify users what went wrong
                        console.log('ERROR: ', error)
                        })
                        // console.log(place.owner_location)
                    }


                )

            })
        }

    render() {
        return (
            <></>
        )
    }
}

export default Geocoding