import React from "react";
import { FormGroup, FormLabel,Form} from 'react-bootstrap';
import {Input, Button, Label, Col,Row} from "reactstrap";

const NewItem = props => (


  


  <>
  
  <div 
  style={{
    backgroundColor: 'white',
    padding:'25px',
    position: 'absolute',
    zIndex:'100',
    left:'25%',
    borderRadius:'50px'
    }}>

    <input type="file"></input>
    <button>Submit  </button>
    <Form>
          <FormGroup >
            <Row>
              <Col>
                <Label for="exampleEmail">Item Name</Label>
                <Input type="text" name="item name" id="exampleEmail" onChange={props.name} />
              </Col>

              {/* <div className="sidebarprofile">
                <img src={this.props.picture} className="sidebarprofileimg " alt='aaaa' /> 
              </div> */}
             
                <input onChange={props.fileName} id='test' className="fileInput" type="file" name='file'/>
           

              {/* <Col>
                  <Label for="exampleSelectMulti">File</Label>
                  <Input type="text" name="file name" id="exampleSelectMulti" onChange={props.fileName}/>
              </Col> */}


            </Row>
            <div>
              <FormLabel >Category</FormLabel>
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
                  <FormLabel className="mt-3">Sub category</FormLabel><br/>
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
              <Button onClick={props.submit}>Add</Button>
            </Col>
          </FormGroup>
          
        </Form>
        </div>
      </>
  );
  

export default NewItem ;



