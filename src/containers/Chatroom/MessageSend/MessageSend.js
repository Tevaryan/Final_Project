import React from 'react';
import {InputGroup,FormControl,Button} from 'react-bootstrap'
import './MessageSend.css'

const MessageSend =(props)=>(
    <>
    <InputGroup style={{width:'400px',marginBottom:'100px',zIndex:"1",position:'absolute', right:'200px '}}>
        <FormControl as="textarea" aria-label="With textarea" rows="5" onChange={props.input} value={props.message}/>
        <div className="arrowup"></div>
        <img className="img" src={localStorage.getItem('profile_picture')} alt='userimage'/>
    </InputGroup>
    <div className="p-2 mb-4 text-right" style={{width: '400px',backgroundColor:'#edefed',position:'absolute', top:'185px',right:'200px'}}>
    <Button variant="outline-secondary" onClick={props.submit}>Send Message</Button>
    </div> 
    </>
)
export default MessageSend