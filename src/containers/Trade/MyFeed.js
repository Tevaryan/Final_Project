import React, { Component } from 'react';
import '../../App.css';
import {
    Container, Col, Row, Card, CardImg, CardText, CardBody, CardLink,
    CardTitle, CardSubtitle
  } 
  from 'reactstrap';
import TradeSideBar from '../../components/TradeSideBar.js'
import jacket from '../../assets/images/jacket.jpg'


class MyFeed extends Component {

    
  render() {
    return (
    <Container fluid>
        <Row>
          <Col className="SideBar" style={{backgroundColor: '#34495E', height: '100vh', overflow: 'hidden'}} sm ='2'>
            <TradeSideBar/>
          </Col>
          <Col style={{backgroundColor: '#34495E', height: '100vh', overflow: 'auto'}}>
        <Row style={{height:'50%'}} className='Card_Row mt-4'>
          <Col sm='4'>
                <Card>
                <CardBody>
                <CardTitle>My Feed</CardTitle>
                </CardBody>
                <div>
                  <img width="100%" src="https://source.unsplash.com/random/300x200"/>
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
                  <img width="100%" src="https://source.unsplash.com/random/300x200" />
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
            <img width="100%" src="https://source.unsplash.com/random/300x200" />
            <CardBody>
              <CardText>Some quick example text to build on the My Feed and make up the bulk of the card's content.</CardText>
              <CardLink href="#">Card Link</CardLink>
              <CardLink href="#">Another Link</CardLink>
            </CardBody>
          </Card>
          </Col>
        </Row>
        <Row style={{height:'50%'}} className='Card_Row mt-5'>
          <Col sm='4'>
                <Card>
              <CardBody>
                <CardTitle>My Feed</CardTitle>
              </CardBody>
              <img width="100%" src="https://source.unsplash.com/random/300x300" />
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
              <img width="100%" src="https://source.unsplash.com/random/300x300" />
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
            <img width="100%" src="https://source.unsplash.com/random/300x300" />
            <CardBody>
              <CardText>Some quick example text to build on the My Feed and make up the bulk of the card's content.</CardText>
              <CardLink href="#">Card Link</CardLink>
              <CardLink href="#">Another Link</CardLink>
            </CardBody>
          </Card>
          </Col>
        </Row>
        <Row style={{height:'50%'}} className='Card_Row mt-5'>
          <Col sm='4'>
                <Card>
              <CardBody>
                <CardTitle>My Feed</CardTitle>
              </CardBody>
              <img width="100%" src="https://source.unsplash.com/random/300x300" />
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
              <img width="100%" src="https://source.unsplash.com/random/300x300" />
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
            <img width="100%" src="https://source.unsplash.com/random/300x300" />
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