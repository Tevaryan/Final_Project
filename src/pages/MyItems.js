import React, { Component } from 'react';
import '../App.css';
import {
    Container, Col, Row, Card, CardImg, CardText, CardBody, CardLink,
    CardTitle, CardSubtitle
  } 
  from 'reactstrap';


class MyItems extends Component {

    
  render() {
    return (
      <Container fluid>
      <Row style={{height:'50%'}} className='Card_Row mt-4'>
        <Col sm='4'>
              <Card>
              <CardBody>
              <CardTitle>My Items</CardTitle>
              </CardBody>
              <div>
                <img width="100%" src="../assets/images/jacket.jpg"/>
              </div>

              <CardBody>
              <CardText>Some quick example text to build on the My Items and make up the bulk of the card's content.</CardText>
              <CardLink href="#">Card Link</CardLink>
              <CardLink href="#">Another Link</CardLink>
            </CardBody>
          </Card>
        </Col>
        <Col sm='4'>
        <Card>
            <CardBody>
              <CardTitle>My Items</CardTitle>
              </CardBody>
                <img width="100%" src="../assets/images/jacket.jpg" />
              <CardBody>
              <CardText>Some quick example text to build on the My Items and make up the bulk of the card's content.</CardText>
              <CardLink href="#">Card Link</CardLink>
              <CardLink href="#">Another Link</CardLink>
            </CardBody>
          </Card>
        </Col>
        <Col sm='4'>
            <Card>
          <CardBody>
            <CardTitle>My Items</CardTitle>
          </CardBody>
          <img width="100%" src="../assets/images/jacket.jpg" />
          <CardBody>
            <CardText>Some quick example text to build on the My Items and make up the bulk of the card's content.</CardText>
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
              <CardTitle>My Items</CardTitle>
            </CardBody>
            <img width="100%" src="../assets/images/jacket.jpg" />
            <CardBody>
              <CardText>Some quick example text to build on the My Items and make up the bulk of the card's content.</CardText>
              <CardLink href="#">Card Link</CardLink>
              <CardLink href="#">Another Link</CardLink>
            </CardBody>
          </Card>
        </Col>
        <Col sm='4'>
        <Card>
            <CardBody>
              <CardTitle>My Items</CardTitle>
            </CardBody>
            <img width="100%" src="../assets/images/jacket.jpg" />
            <CardBody>
              <CardText>Some quick example text to build on the My Items and make up the bulk of the card's content.</CardText>
              <CardLink href="#">Card Link</CardLink>
              <CardLink href="#">Another Link</CardLink>
            </CardBody>
          </Card>
        </Col>
        <Col sm='4'>
            <Card>
          <CardBody>
            <CardTitle>My Items</CardTitle>
          </CardBody>
          <img width="100%" src="../assets/images/jacket.jpg" />
          <CardBody>
            <CardText>Some quick example text to build on the My Items and make up the bulk of the card's content.</CardText>
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
              <CardTitle>My Items</CardTitle>
            </CardBody>
            <img width="100%" src="../assets/images/jacket.jpg" />
            <CardBody>
              <CardText>Some quick example text to build on the My Items and make up the bulk of the card's content.</CardText>
              <CardLink href="#">Card Link</CardLink>
              <CardLink href="#">Another Link</CardLink>
            </CardBody>
          </Card>
        </Col>
        <Col sm='4'>
        <Card>
            <CardBody>
              <CardTitle>My Items</CardTitle>
            </CardBody>
            <img width="100%" src="../assets/images/jacket.jpg" />
            <CardBody>
              <CardText>Some quick example text to build on the My Items and make up the bulk of the card's content.</CardText>
              <CardLink href="#">Card Link</CardLink>
              <CardLink href="#">Another Link</CardLink>
            </CardBody>
          </Card>
        </Col>
        <Col sm='4'>
            <Card>
          <CardBody>
            <CardTitle>My Items</CardTitle>
          </CardBody>
          <img width="100%" src="../assets/images/jacket.jpg" />
          <CardBody>
            <CardText>Some quick example text to build on the My Items and make up the bulk of the card's content.</CardText>
            <CardLink href="#">Card Link</CardLink>
            <CardLink href="#">Another Link</CardLink>
          </CardBody>
        </Card>
        </Col>
      </Row>

  </Container>
    )
  }
}

export default MyItems;