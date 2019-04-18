import React from 'react'
import axios from 'axios'

class Notification extends React.Component {
    state = {
        notification: ''
    }

    componentDidMount(){
        let id = this.props.id 
        axios.get(`http://localhost:5000/api/v1/message/notification/${id}`,{
            method: 'GET',
            headers: {
                "Authorization": "Bearer " + localStorage.getItem("JWT")
            },
        }).then((result)=>{
            // console.log(result)
            this.setState({
                notification: result.data.num
            })
        })
    }


    render(){
        let notification
        if (this.state.notification){
            notification=this.state.notification
        } else {
            notification = null
        }
        
        return(
            <>
            {notification}
            </>
        )
    }
}

export default Notification