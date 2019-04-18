import React from 'react'
import axios from 'axios'

class latestMessaage extends React.Component {
    state = {
        latestMessaage: ''
    }

    componentDidMount(){
        let id = this.props.id 
        axios.get(`http://localhost:5000/api/v1/message/latestMessage/${id}`,{
            method: 'GET',
            headers: {
                "Authorization": "Bearer " + localStorage.getItem("JWT")
            },
        }).then((result)=>{
            console.log(result.data.msg)
            this.setState({
                latestMessaage: result.data.msg
            })
        })
    }


    render(){
        let latestMessaage
        if (this.state.latestMessaage){
            latestMessaage=this.state.latestMessaage
        } else {
            latestMessaage = null
        }
        
        return(
            <>
            {latestMessaage}
            </>
        )
    }
}

export default latestMessaage