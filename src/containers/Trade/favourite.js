import React, { Component } from 'react';
import '../../App.css';
import {
    Container, Col, Row
  } 
  from 'reactstrap';
import TradeSideBar from '../../components/TradeSideBar.js';
import axios from "axios";
import { Card, CardBody, CardTitle, CardText} from "reactstrap";
import {Link} from "react-router-dom";


class TaggedItems extends Component {

  state={
    items:[]
  }


  componentDidMount(){
    this.refetch()
  }

  refetch= () =>{
    axios( {
      url: `http://localhost:5000/api/v1/wishlist/show`,
      headers: { Authorization: `Bearer ${localStorage.getItem("JWT")}` },
      method: "get"
    })
    .then((response)=>{
      
      this.setState({
        items: response.data.item,
      })
      // console.log(response)
      
    })
    .catch( (error)=> {
      console.log(error);
    });
  }






  deleteFavourite = (id) =>{

    const data ={
      item_id:id
  }
  
  axios.post(`http://localhost:5000/api/v1/wishlist/delete`, data, {
      headers: {
      "Authorization": "Bearer " + localStorage.getItem("JWT")
      }
  })
  .then((response)=> {

     this.refetch()
  })
  .catch(function (error) {
      console.log(error);
  });

  }
    
  render() {
    return (
    <Container fluid>
      <Row>
          <Col className="SideBar" style={{backgroundColor: '#34495E',marginTop:'60px', height: '100vh', overflow: 'hidden'}} sm ='2'>
            <TradeSideBar/>
          </Col>
          <Col style={{backgroundColor:"#202c38", height: '100vh', overflow: 'auto',marginTop:'60px'}}>
          <Row>
            {
              this.state.items.map((item,index)=>{
                return(
                  

                    <Col sm='4' key={index} className={"mt-5"}>
                    <Card>
                    <CardBody className="itemname">
                        <CardTitle>
                        {/* <span>Item{index}</span> */}
                        {item.name}<br/>
                        </CardTitle>
                    </CardBody>
                    <img width="100%" src={item.file_name} alt='temparaly images' />
                    <CardBody>
                        <div className="itemtag">
                            <CardText>
                                {/* {item.file_name}<br/> */}
                                {item.tag_parent}<br/>
                            </CardText>
                        </div>
                        <div className="itemtag">
                            <CardText>
                                {item.tag_children}<br/>
                            </CardText>
                        </div>
                        <div className="itemdescription">
                            <CardText>
                                {item.description}<br/>
                            </CardText>
                        </div>
                    
                    <Link to="/Dashboard/TradeMain/favourite"><button onClick={()=>this.deleteFavourite(item.id)}>delete</button></Link>
                    </CardBody>
                    </Card>
                    </Col>
               
                )
              })
            }
                </Row>
          </Col>
      </Row>
        
    </Container>
    )
  }
}

export default TaggedItems;