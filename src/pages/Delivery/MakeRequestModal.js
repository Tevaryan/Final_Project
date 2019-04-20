import React, {} from "react"
import {  } from "react-router-dom"
import {Row,Form, Badge,Button} from 'react-bootstrap'
import BackDrop from '../../components/Backdrop/Backdrop'
import axios from 'axios'
import {FormGroup,Input,Label,Col} from 'reactstrap'

class NewRequestModal extends React.Component {
  state = {
      requestName:'',
      starttime:'',
      endtime:'',
      country:'',
      reward:'',
      description:''
  } 

  handleSubmit = (event) => { 
       event.preventDefault()
       axios( {
        url: `http://localhost:5000/api/v1/request/new/`,
        headers: { Authorization: `Bearer ${localStorage.getItem("JWT")}`},
        method: "post",
        data:{
            requestName: this.state.requestName,
            starttime: this.state.starttime,
            endtime: this.state.endtime,
            country: this.state.country,
            reward: this.state.reward,
            description: this.state.description
        }
      })
    .then((response)=>{
        console.log(response)
    })
    .catch( (error)=> {
        console.log(error);
    });
  }

  // handle input data
  inputHandler = (event) => {
    if (event.target.name === 'name') {
      // console.log(event.target.value)
      this.setState({
        requestName: event.target.value
      })
    } else if(event.target.name === 'starttime') {
      this.setState({
        starttime: event.target.value
      })
    } else if(event.target.name === 'endtime') {
        this.setState({
        endtime: event.target.value
    })
    } else if(event.target.name === 'country') {
        this.setState({
        country: event.target.value
    })
    } else if(event.target.name === 'reward') {
        this.setState({
        reward: event.target.value
    })
    } else if(event.target.name === 'description') {
        this.setState({
        description: event.target.value
    })
    } 
  }

  render(){

    // generate birthday select options
    
    return(
        <>
        {/* backdrop */}
        <BackDrop backdrop={this.props.click}/>
        {/* input form */}
            <Row className="position-absolute" style={{zIndex:'100', left:'30%',backgroundColor:'#F8ECC2',boxShadow:'5px 10px',boxSizing:'border-box',width:'500px'}}>
            <Form className="w-100">
                <Form.Group style={{margin: '15px 15px 0px 15px', display:'block'}} >
                    <Form.Label className="mb-0">Request Name</Form.Label>
                    <Badge className={'ml-1'} variant='danger'>required</Badge>
                    <Form.Control type="name" name='name' value={this.state.requestName} onChange={this.inputHandler} className="mb-0"/>
                    <Form.Text className="text-muted mb-0">
                    </Form.Text>

                    <Row>
                      <Col>
                        <FormGroup>
                          <Label className="mb-0" for="exampleDate">Start Date</Label>
                          <Input
                            type="date"
                            name="starttime"
                            id="exampleDate"
                            placeholder="date placeholder"
                            onChange={this.inputHandler}
                          />
                        </FormGroup>
                      </Col>
                      <Col>
                        <FormGroup>

                          <Label className="mb-0" for="exampleDate">End Date</Label>
                          <Input
                            type="date"
                            name="endtime"
                            id="exampleDate"
                            placeholder="date placeholder"
                            onChange={this.inputHandler}
                            
                          />
                        </FormGroup>
                      </Col>
                    </Row>

                    
                    <Form.Label className="mb-0">Country</Form.Label>
                    <Badge className={'ml-1'} variant='danger'>required</Badge>
                    <Form.Control type="country" value={this.state.country} name='country' onChange={this.inputHandler}/>
                    <Form.Text className="text-muted mb-0">
                    </Form.Text>
                    

                    <Form.Label className="mb-0">Reward</Form.Label>
                    <Badge className={'ml-1'} variant='danger'>required</Badge>
                    <Form.Control type="reward" value={this.state.reward} name='reward' onChange={this.inputHandler}/>
                    <Form.Text className="text-muted">
                    </Form.Text>

                    <Form.Label className="mb-0">Description</Form.Label>
                    <Badge className={'ml-1'} variant='danger'>required</Badge>
                    <Form.Control  name='description' as="textarea" rows="10" value={this.state.description}  onChange={this.inputHandler}/>
                </Form.Group>
                <Button style={{margin: '30px'}} variant="primary" type="submit" onSubmit={this.handleSubmit} 
                onClick={this.props.click}
                >
                submit
                </Button>
            </Form>
            </Row>
        </>
    )
  }
}
export default NewRequestModal