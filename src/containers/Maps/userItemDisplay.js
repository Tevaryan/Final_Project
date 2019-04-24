import React, { Component }  from 'react';

import {
    Button, Card, CardImg, CardBody, CardTitle, CardSubtitle, CardText
  } 
  from 'reactstrap';
import {Link} from "react-router-dom";

class UserItemDisplay extends React.Component{

    render () {
        return (
                <Card>
                    <CardImg top width="100%" src="https://source.unsplash.com/random/300x200" alt="temporary images" />
                    <CardBody>
                    <CardTitle>{this.props.item.owner_name}</CardTitle>
                    <CardSubtitle>{this.props.item.item_name}</CardSubtitle>
                    <CardText>{this.props.item.description}</CardText>
                    <Link to={{pathname: '/Dashboard/message/' + this.props.item.owner_user_id,
                        state:{
                            profile_image: this.props.item.owner_profile_img,
                            username: this.props.item.owner_name,
                            item_name:this.props.item.item_name,
                            description:this.props.item.description
                        }}}
                        ><Button color="secondary" className='btn-block'>Contact</Button></Link>
                    </CardBody>
                </Card>
        )
    }

}
export default UserItemDisplay