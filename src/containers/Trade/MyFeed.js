import React, { Component } from 'react';
import {
    Container, Col, Row, Card, CardText, CardBody, CardLink,
    CardTitle,Button
  } 
  from 'reactstrap';
import TradeSideBar from '../../components/TradeSideBar.js'
import axios from 'axios'
import {Link} from 'react-router-dom'

class MyFeed extends Component {
  state={
    items:[]
  }

  componentDidMount(){
    axios( {
      url: `http://localhost:5000/api/v1/item/show/search_result`,
      headers: { Authorization: `Bearer ${localStorage.getItem("JWT")}` },
      method: "get"
    })
    .then((response)=>{
      console.log(response)
      this.setState({
        items: response.data.item,
      })
      console.log(this.state.items)
    })
    .catch( (error)=> {
      console.log(error);
    });
  }
    
  render() {
    return (
    <Container fluid>
        <Row>
          <Col className="SideBar" style={{backgroundColor: '#34495E', height: '100vh', overflow: 'hidden'}} sm ='2'>
            <TradeSideBar/>
          </Col>
          <Col style={{backgroundColor: '#f5f5f5', height: '100vh', overflow: 'auto'}}>

          <Row><h3><strong>You may also wanna check</strong></h3></Row>
          <Row style={{height:'50%'}} className='Card_Row mt-4'>
        {
          this.state.items.map((item,index)=>{
            let link = '/Dashboard/message/' + item.owner_user_id
            return(
              <Col sm='4' className='my-2'key={index}>
              <Card>
                <CardBody>
                <CardTitle>{item.item_name}</CardTitle>
                </CardBody>
                <div>
                  <img width="100%" src="https://source.unsplash.com/random/300x200" alt='temparaly images'/>
                </div>
                <CardBody>
                <CardText>ownwer: {item.owner_name}</CardText>
                <CardText>Description:  {item.description}</CardText>
                <CardLink href="#">{item.tag_children}</CardLink>
                <CardLink href="#">{item.tag_parent}</CardLink>
                
              </CardBody>
              <div className="card-footer text-muted">
              <Link to={{pathname: link,
              state:{
                profile_image: item.owner_profile_img,
                username: item.owner_name,
                item_name:item.item_name,
                description:item.description
              }}}
                ><Button color="secondary" className='btn-block'>Contact</Button></Link>
              </div>
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

export default MyFeed;