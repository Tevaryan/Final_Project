import React from "react";
import { FormGroup, FormLabel,Form} from 'react-bootstrap';
import {Input, Button, Label, Col} from "reactstrap";


const NewItem = props => (
    <Form>
          <FormGroup >
            <Label for="exampleEmail" sm={2}>Item Name</Label>
            <Col sm={10}>
              <Input type="text" name="item name" id="exampleEmail" onChange={props.name} />
            </Col>
          </FormGroup>
          <FormGroup sm={2}>
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
                {
                  props.tagParentValue ?
                  (
                    <>
                      <FormLabel>Sub category</FormLabel>
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
          </FormGroup>
  
          <FormGroup >
            <Label for="exampleSelectMulti" sm={2}>file_name</Label>
            <Col sm={10}>
              <Input type="text" name="file name" id="exampleSelectMulti" onChange={props.fileName}/>
            </Col>
          </FormGroup>
          <FormGroup>
            <Label for="exampleText" sm={2}>Description</Label>
            <Col sm={10}>
              <Input type="textarea" name="description" id="exampleText" onChange={props.description}/>
            </Col>
          </FormGroup>
          <FormGroup>
            <Col sm={{ size: 10 }}>
              <Button onClick={props.submit}>Add</Button>
            </Col>
          </FormGroup>
          
        </Form>
  
  );
  

export default NewItem ;



