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

    addExchange=(item_id)=>{
        
        const data ={
            item_id:this.props.item.item_id,
            
            
        }
        
        axios.post(`http://localhost:5000/api/v1/exchange_request/new`, data, {
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

    cancelExchange=(event)=>{

        const data ={
            item_id:this.props.item.item_id,
            
        }
        
        axios.post(`http://localhost:5000/api/v1/exchange_request/delete`, data, {
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
                {
                    this.props.item.favourite===false
                    ?<Button onClick={this.addFavouriteHandler}>add favourite</Button>
                    :<Button onClick={this.deleteFavouriteHandler}>remove favourite</Button>
                }
                
                <CardTitle>{this.props.item.item_name} </CardTitle>
    
                </CardBody>
                <div>
                  <img width="100%" src="https://source.unsplash.com/random/300x200" alt='temparaly images'/>
                </div>
                <CardBody>
                <CardText>ownwer: {this.props.item.owner_name}
                        <Link to={{pathname: this.props.link,
                            state:{
                                profile_image: this.props.item.owner_profile_img,
                                username: this.props.item.owner_name,
                                item_name:this.props.item.item_name,
                                description:this.props.item.description
                            }}}
                        ><Button color="secondary" >Contact</Button></Link>
                </CardText>
                <CardText>Description:  {this.props.item.description}</CardText>
                <CardLink href="#">{this.props.item.tag_children}</CardLink>
                <CardLink href="#">{this.props.item.tag_parent}</CardLink>
                
              </CardBody>
              {/* <div className="card-footer text-muted">
              <Link to={{pathname: this.props.link,
              state:{
                profile_image: this.props.item.owner_profile_img,
                username: this.props.item.owner_name,
                item_name:this.props.item.item_name,
                description:this.props.item.description
              }}}
                ><Button color="secondary" className='btn-block'>Contact</Button></Link>
              </div> */}
              <div className="card-footer text-muted">
              {
                    this.props.item.exchange_request===false
                    ?<Button color="secondary" className='btn-block'onClick={this.addExchange}>Exchange</Button>
                    :<Button color="secondary" className='btn-block' onClick={this.cancelExchange}>Cancel Exchange</Button>
                }
                
              </div>
              
              </Card>
        </Col>
    )
}
}

export default SearchItems;





