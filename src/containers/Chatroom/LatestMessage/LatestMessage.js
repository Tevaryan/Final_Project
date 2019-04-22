import React from 'react'
import axios from 'axios'

class latestMessaage extends React.Component {
    state = {
        latestMessaage: '',
        MessageTime:''
    }

    componentDidMount(){
        let id = this.props.id 
        axios.get(`http://localhost:5000/api/v1/message/latestMessage/${id}`,{
            method: 'GET',
            headers: {
                "Authorization": "Bearer " + localStorage.getItem("JWT")
            },
        }).then((result)=>{
            console.log(result.data)
            console.log(result.data[0].msg)
            console.log(result.data[0].time)
            this.setState({
                latestMessaage: result.data[0].msg,
                MessageTime: result.data[0].time
            })
        })
    }   


    render(){
        let latestMessaage = this.state.latestMessaage? this.state.latestMessaage: null
        let time = this.state.MessageTime? this.state.MessageTime.slice(0,this.state.MessageTime.length-7): null
        return(
            <>
            {latestMessaage}<br/>({time})
            </>
        )
    }
}

export default latestMessaage