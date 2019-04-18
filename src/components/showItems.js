import React from "react";
import {Col} from "react-bootstrap";
import { FormGroup, FormLabel,Form} from 'react-bootstrap';
import {Input, Button, Label} from "reactstrap";
import axios from "axios";
import {Redirect} from "react-router-dom";


class Items extends React.Component{

    constructor(props){
        super(props)
        this.state = {
            editItem: false,
            name: this.props.item.name,
            tag_parent:this.props.item.tag_parent,
            tag_children:this.props.item.tag_children,
            description: this.props.item.description,
            file_name:this.props.item.file_name,
            redirect:false
    
            }
    }

    nameInputHandler =(event)=>{
        this.setState({name:event.target.value})
        }

    tagParentInputHandler =(event)=>{
        this.setState({tag_parent:event.target.value})
        }
    
    tagChildrenInputHandler =(event)=>{
    this.setState({tag_children:event.target.value})
    
    }

    descriptionInputHandler =(event)=>{
    this.setState({description:event.target.value})
    
    }

    fileNameInputHandler =(event)=>{
    this.setState({file_name:event.target.value})
    
    }

    submitHandler = (event) => {

        alert('Success');
            event.preventDefault();
            const data ={
              name: this.state.name,
              tag_parent:this.state.tag_parent,
              tag_children:this.state.tag_children,
              description: this.state.description,
              file_name: this.state.file_name
            }
            console.log(this.props.item)
            axios.post(`http://localhost:5000/api/v1/item/edit/${this.props.item.id}`, data, {
              headers: {
                "Authorization": "Bearer " + localStorage.getItem("JWT")
              }
            })
            .then((response)=> {
                this.props.refetch()
                this.setState({editItem: false})
            })
            .catch(function (error) {
              console.log(error);
            });
        
      }

            


    render(){


       
        if(this.state.editItem === true){
            return(

            <Col sm={4} key={this.props.index} className={"mt-5"} style={{border:"2px solid black"}}>
            <Form>
                    <FormGroup >
                    <Label for="exampleEmail" sm={2}>Item Name</Label>
                    <Col sm={10}>
                        <Input type="text" name="item name" id="exampleEmail" value={this.state.name} onChange={this.nameInputHandler}/>
                    </Col>
                    </FormGroup>
                    <FormGroup sm={2}>
                    <FormLabel >Category</FormLabel>
                        <br/>
                        <select onChange={this.tagParentInputHandler} defaultValue={this.state.tag_parent}>
                        <option></option> 
                        {
                            this.props.optionsPrefecture.map((o, index)=> {
                            return(<option key={index} value={o}>{o}</option>)
                            }
                            )
                        }
                        </select>
                        
                            <>
                                <FormLabel>Sub category</FormLabel>
                                <select onChange={this.tagChildrenInputHandler} defaultValue={this.state.tag_children}>
                                <option></option>
                                {
                                this.props.subOption[this.state.tag_parent].map((o, index)=> {
                                    return(<option key={index} value={o}>{o}</option>)
                                }
                                )
                                }
                                
                                </select>
                            </>
                            
                    
                    </FormGroup>
        
                    <FormGroup >
                    <Label for="exampleSelectMulti" sm={2}>file_name</Label>
                    <Col sm={10}>
                        <Input type="text" name="file name" id="exampleSelectMulti" value={this.state.file_name} onChange={this.fileNameInputHandler}/>
                    </Col>
                    </FormGroup>
                    <FormGroup>
                    <Label for="exampleText" sm={2}>Description</Label>
                    <Col sm={10}>
                        <Input type="textarea" name="description" id="exampleText" value={this.state.description} onChange={this.descriptionInputHandler} />
                    </Col>
                    </FormGroup>
                    <FormGroup>
                    <Col sm={{ size: 10 }}>
                        <Button onClick={this.submitHandler}>Edit</Button>
                    </Col>
                    </FormGroup>
        
                </Form>
                </Col>
            )
        }

        
        return(


            <Col sm={4} key={this.props.index} className={"mt-5"} style={{border:"2px solid black"}}>
                     
                <span>Item{this.props.index}</span>
                <div>Name:  {this.props.item.name}<br/>
                    Photo_Url:  {this.props.item.file_name}<br/>
                    Category:  {this.props.item.tag_parent}<br/>
                    Sub Category: {this.props.item.tag_children}<br/>
                    description: {this.props.item.description}<br/>
                    <button onClick={()=>{this.setState({editItem:true})}}>edit</button>
                </div>
            </Col>
                   
            )

          
    }







}

export default Items;