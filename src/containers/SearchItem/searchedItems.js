import React from "react";
import {
     Col, Card, CardText, CardBody, CardLink,Button,
    CardTitle
  } 
from 'reactstrap';
import {Link} from "react-router-dom";
import axios from "axios";




class SearchItems extends React.Component{


    addFavouriteHandler = (event) => {

       
    
        event.preventDefault();
        const data ={
            item_id:this.props.item.item_id,
            
        }
        
        axios.post(`http://localhost:5000/api/v1/wishlist/new`, data, {
            headers: {
            "Authorization": "Bearer " + localStorage.getItem("JWT")
            }
        })
        .then((response)=> {
            this.props.refetch()
        })
        .catch(function (error) {
            console.log(error);
        });
    
    }

    deleteFavouriteHandler=(event)=>{

        const data ={
            item_id:this.props.item.item_id,
            
        }
        
        axios.post(`http://localhost:5000/api/v1/wishlist/delete`, data, {
            headers: {
            "Authorization": "Bearer " + localStorage.getItem("JWT")
            }
        })
        .then((response)=> {
            this.props.refetch()
        })
        .catch(function (error) {
            console.log(error);
        });
    }



render(){

    return(
    
        <Col sm='4' className='my-2'>
              <Card>
                <CardBody>
                <CardTitle>{this.props.item.item_name} </CardTitle>
                {
                  this.props.item.favourite===false
                  ?<Button onClick={this.addFavouriteHandler}>add favourite</Button>
                  :<Button onClick={this.deleteFavouriteHandler}>remove favourite</Button>
                }
    
                </CardBody>
                <div>
                  <img width="100%" src={this.props.item.file_name} alt='temparaly images'/>
                </div>
                <CardBody>
                <CardText>ownwer: {this.props.item.owner_name}</CardText>
                <CardText>Description:  {this.props.item.description}</CardText>
                <CardLink href="#">{this.props.item.tag_children}</CardLink>
                <CardLink href="#">{this.props.item.tag_parent}</CardLink>
                
              </CardBody>
              <div className="card-footer text-muted">
              <Link to={{pathname: this.props.link,
              state:{
                profile_image: this.props.item.owner_profile_img,
                username: this.props.item.owner_name,
                item_name:this.props.item.item_name,
                description:this.props.item.description,
                img:this.props.item.file_name
              }}}
                ><Button color="secondary" className='btn-block'>Contact</Button></Link>
              </div>
              </Card>
        </Col>
    )
}
}

export default SearchItems;





