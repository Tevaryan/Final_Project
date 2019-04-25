import React from "react";
import {
     Col, Card, CardText, CardBody, CardLink,Button,
    CardTitle
  } 
from 'reactstrap';
import {Link} from "react-router-dom";
import axios from "axios";


const buttt ={
    padding: "5px 10px",
    backgroundColor: "#5D6D7E",
    color: "#fff",
    fontSize: 14,
    borderRadius: 5,


}



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
    
        <Col sm='4' className='my-2 mt-5'>
              <Card>
                <div>
                  <img width="100%" src={this.props.item.file_name} alt='temparaly images'/>
                </div>
                <CardTitle className="px-4 mt-2" tag="h1">{this.props.item.item_name} </CardTitle>
                <CardBody>
                <CardText className= "px-0" tag="i">{this.props.item.description}</CardText>
                <hr/>
                <CardLink style={buttt} href="#">{this.props.item.tag_children}</CardLink>
                <CardLink style={buttt} href="#">{this.props.item.tag_parent}</CardLink>
                
              </CardBody>
                <CardText className="px-3"> 
                        <Link to={{pathname: this.props.link,
                            state:{
                                profile_image: this.props.item.owner_profile_img,
                                username: this.props.item.owner_name,
                                item_name:this.props.item.item_name,
                                description:this.props.item.description
                            }}}
                        ><Button color="secondary" className='btn-block' color="secondary" >Contact Owner </Button></Link>
                </CardText>
              {/* <div className="card-footer text-muted">
              <Link to={{pathname: this.props.link,
              state:{
                  profile_image: this.props.item.owner_profile_img,
                username: this.props.item.owner_name,
                item_name:this.props.item.item_name,
                description:this.props.item.description,
                img:this.props.item.file_name
            }}}
            ><Button color="secondary" className='btn-block'>Contact</Button></Link>
        </div> */}
        <CardBody className="py-0 px-3">
        {
            this.props.item.favourite===false
            ?<Button color="primary" className='btn-block my-1 py-1' onClick={this.addFavouriteHandler}>add favourite</Button>
            :<Button color="danger" className='btn-block' onClick={this.deleteFavouriteHandler}>remove favourite</Button>
        }
        
        </CardBody>
              <div className="card-footer text-muted">
              {
                    this.props.item.exchange_request===false
                    ?<Button color="success" className='btn-block'onClick={this.addExchange}>Exchange</Button>
                    :<Button color="danger" className='btn-block' onClick={this.cancelExchange}>Cancel Exchange</Button>
                }
                
              </div>
              
              </Card>
        </Col>
    )
}
}

export default SearchItems;





