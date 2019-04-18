import React from "react";
import { FormGroup, FormLabel,Form} from 'react-bootstrap';
import {Input, Button, Label, Col} from "reactstrap";





class EditItem extends React.Component{


render(){

        return(

                <Form>
                    <FormGroup >
                    <Label for="exampleEmail" sm={2}>Item Name</Label>
                    <Col sm={10}>
                        <Input type="text" name="item name" id="exampleEmail" />
                    </Col>
                    </FormGroup>
                    {/* <FormGroup sm={2}>
                    <FormLabel >Category</FormLabel>
                        <br/>
                        <select >
                        <option></option>
                        {
                            this.props.optionsPrefecture.map((o, index)=> {
                            return(<option key={index} value={o}>{o}</option>)
                            }
                            )
                        }
                        </select>
                        {
                            this.props.tagParentValue ?
                            (
                            <>
                                <FormLabel>Sub category</FormLabel>
                                <select>
                                <option></option>
                                {
                                this.props.subOption[this.props.tagParentValue].map((o, index)=> {
                                    return(<option key={index} value={o}>{o}</option>)
                                }
                                )
                                }
                                
                                </select>
                            </>
                            ) : null
                        }
                    </FormGroup> */}
        
                    <FormGroup >
                    <Label for="exampleSelectMulti" sm={2}>file_name</Label>
                    <Col sm={10}>
                        <Input type="text" name="file name" id="exampleSelectMulti" />
                    </Col>
                    </FormGroup>
                    <FormGroup>
                    <Label for="exampleText" sm={2}>Description</Label>
                    <Col sm={10}>
                        <Input type="textarea" name="description" id="exampleText" />
                    </Col>
                    </FormGroup>
                    <FormGroup>
                    <Col sm={{ size: 10 }}>
                        <Button >Add</Button>
                    </Col>
                    </FormGroup>
        
                </Form>
        
        
        

        
 )
        
}        

}

export default EditItem;