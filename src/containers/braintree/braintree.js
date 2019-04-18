import React from "react";
import DropIn from "braintree-web-drop-in-react";
import axios from 'axios'
     
class Test extends React.Component {
  instance;
 
  state = {
    clientToken: null
  };
 
  componentDidMount() {
    axios({
        method: 'GET',
        url: "http://localhost:5000/api/v1/money/new",
        headers:{
            "Content-Type":"application/json",
            "Authorization": "Bearer " + localStorage.getItem("JWT")
        }
    }).then((result)=>{
        this.setState({
            clientToken: result.data.client_token
        });
    })
  }
 
  clickHandler= async ()=> {
    // Send the nonce to your server
    const  nonce  =  await this.instance.requestPaymentMethod();
    axios({
        method: 'post',
        url: 'http://localhost:5000/api/v1/money/checkouts',
        headers: {
            'Content-Type': "application/json"
        },
        data: JSON.stringify({
            //!!! this amount money must be replaced with actual value
            amount: 10,
            nonce: nonce.nonce
          })
    })
  }
 
  render() {
    if (!this.state.clientToken) {
      return (
        <div>
          <h1>Loading...</h1>
        </div>
      );
    } else {
      return (
        <div>
          <DropIn
            options={{ authorization: this.state.clientToken }}
            onInstance={instance => (this.instance = instance)}
          />
          <button onClick={this.clickHandler}>Buy</button>
        </div>
      );
    }
  }
}

export default Test