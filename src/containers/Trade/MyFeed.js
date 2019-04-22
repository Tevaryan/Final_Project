import React, { Component } from 'react';
import {
    Container, Col, Row, Card, CardText, CardBody, CardLink,
    CardTitle
  } 
  from 'reactstrap';
import TradeSideBar from '../../components/TradeSideBar.js'



class MyFeed extends Component {

    
  render() {
    return (
    <Container fluid>
        <Row>
          <Col className="SideBar" style={{backgroundColor: '#34495E', height: '100vh', overflow: 'hidden'}} sm ='2'>
            <TradeSideBar/>
          </Col>
          <Col style={{backgroundColor: '#f5f5f5', height: '100vh', overflow: 'auto'}}>
        <Row style={{height:'60%'}} className='Card_Row mt-4'>
          <Col sm='4' >
                <Card>
                <CardBody>
                <CardTitle>My Feed</CardTitle>
                </CardBody>
                <div>
                  <img width="100%" src="https://source.unsplash.com/random/300x200" alt='temparaly images1'/>
                </div>
                <CardBody>
                <CardText>Some quick example text to build on the My Feed and make up the bulk of the card's content.</CardText>
                <CardLink href="#">Card Link</CardLink>
                <CardLink href="#">Another Link</CardLink>
              </CardBody>
            </Card>
          </Col>
          <Col sm='4'>
          <Card>
              <CardBody>
                <CardTitle>My Feed</CardTitle>
                </CardBody>
                  <img width="100%" src="https://source.unsplash.com/random/300x200" alt='temparaly images2' />
                <CardBody>
                <CardText>Some quick example text to build on the My Feed and make up the bulk of the card's content.</CardText>
                <CardLink href="#">Card Link</CardLink>
                <CardLink href="#">Another Link</CardLink>
              </CardBody>
            </Card>
          </Col>
          <Col sm='4'>
              <Card>
            <CardBody>
              <CardTitle>My Feed</CardTitle>
            </CardBody>
            <img width="100%" src="https://source.unsplash.com/random/300x200" alt='temparaly images3' />
            <CardBody>
              <CardText>Some quick example text to build on the My Feed and make up the bulk of the card's content.</CardText>
              <CardLink href="#">Card Link</CardLink>
              <CardLink href="#">Another Link</CardLink>
            </CardBody>
          </Card>
          </Col>
        </Row>
        <Row style={{height:'60%'}} className='Card_Row mt-5'>
          <Col sm='4'>
                <Card>
              <CardBody>
                <CardTitle>My Feed</CardTitle>
              </CardBody>
              <img width="100%" src="https://source.unsplash.com/random/300x300" alt='temparaly images4' />
              <CardBody>
                <CardText>Some quick example text to build on the My Feed and make up the bulk of the card's content.</CardText>
                <CardLink href="#">Card Link</CardLink>
                <CardLink href="#">Another Link</CardLink>
              </CardBody>
            </Card>
          </Col>
          <Col sm='4'>
          <Card>
              <CardBody>
                <CardTitle>My Feed</CardTitle>
              </CardBody>
              <img width="100%" src="https://source.unsplash.com/random/300x300" alt='temparaly images5' />
              <CardBody>
                <CardText>Some quick example text to build on the My Feed and make up the bulk of the card's content.</CardText>
                <CardLink href="#">Card Link</CardLink>
                <CardLink href="#">Another Link</CardLink>
              </CardBody>
            </Card>
          </Col>
          <Col sm='4'>
              <Card>
            <CardBody>
              <CardTitle>My Feed</CardTitle>
            </CardBody>
            <img width="100%" src="https://source.unsplash.com/random/300x300" alt='temparaly images6' />
            <CardBody>
              <CardText>Some quick example text to build on the My Feed and make up the bulk of the card's content.</CardText>
              <CardLink href="#">Card Link</CardLink>
              <CardLink href="#">Another Link</CardLink>
            </CardBody>
          </Card>
          </Col>
        </Row>
        
            
          </Col>
        </Row>
    </Container>
    )
  }
}

export default MyFeed;