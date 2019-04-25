import React from "react";
// import { FormGroup, Label,Form} from 'react-bootstrap';
import {Input, Button, Label, Col,Row, FormGroup, Form} from "reactstrap";









const NewItem = props => (


  


  <>
  
  <div 
  style={{
    backgroundColor: 'white',
    padding:'25px',
    position: 'absolute',
    zIndex:'100',
    left:'25%',
    borderRadius:'20px'
    }}>

    {/* <input type="file"></input>
    <button>Submit  </button> */}
    <Form>
          <FormGroup >
            <Row>
              <div className="pl-3">
                <Label for="exampleEmail">Item Name</Label>
                <Input type="text" name="item name" id="exampleEmail" onChange={props.name} />
              </div>

          
            </Row>
            <Row>
              {/* <div className="sidebarprofile">
                <img src={this.props.picture} className="sidebarprofileimg " alt='aaaa' /> 
              </div> */}
              <div className="mt-5 pl-3">
                <Label>Upload Item Photo</Label><br/>
                <input onChange={props.fileName} id='test' className="fileInput" type="file" name='file'/>
              </div>
           

              {/* <Col>
                  <Label for="exampleSelectMulti">File</Label>
                  <Input type="text" name="file name" id="exampleSelectMulti" onChange={props.fileName}/>
              </Col> */}


            </Row>
            <div>
              <Label className="mt-5">Category</Label>
                  <br/>
                  <select onChange={props.tagParent}>
                  <option></option>
                  {
                      props.optionsPrefecture.map((o, index)=> {
                      return(<option key={index} value={o}>{o}</option>)
                      }
                    )
                  }
                  </select>
            </div>
            <div>

                {
              props.tagParentValue ?
              (
                <>
                  <Label className="mt-3">Sub category</Label><br/>
                  <select onChange={props.tagChildren}>
                  <option></option>
                  {
                    props.subOption[props.tagParentValue].map((o, index)=> {
                      return(<option key={index} value={o}>{o}</option>)
                    }
                    )
                       }
                    
                  </select>
                </>
              ) : null
                }
            </div>

          </FormGroup>
  
          <FormGroup>
            <Label for="exampleText" sm={2}>Description</Label>
              <Input type="textarea" name="description" id="exampleText" onChange={props.description}/>
          </FormGroup>
          <FormGroup>
            <Col sm={{ size: 10 }}>
              <Button className="btn-success" onClick={props.submit}>Add</Button>
            </Col>
          </FormGroup>
          
        </Form>
        </div>
      </>
  );
  

export default NewItem ;



