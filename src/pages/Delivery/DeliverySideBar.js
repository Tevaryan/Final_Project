import React from 'react';
import {Nav,NavItem,Button,Input,InputGroup,InputGroupAddon} from 'reactstrap';
import search from '../../assets/images/Search-512.png'

class DeliverySideBar extends React.Component {
  state={
    Destination:'',
    Location:'',
  }

  componentDidMount(){
    this.setState({
      Destination: localStorage.getItem('destination'),
      Location: localStorage.getItem('location')
    })
  }

  render(){
    //! check user resistered location and destination 
    let DesButton = this.state.Destination ? <><strong>By your location</strong><NavItem className = 'mb-2'><Button color="secondary" ><strong>{localStorage.getItem('location')}</strong></Button></NavItem></>: null

    let LocButton = this.state.Location ? <><strong>By your destination</strong><NavItem className = 'Navbar_TradeMain mb-2'><Button color="secondary" ><strong>{localStorage.getItem('destination')}</strong></Button></NavItem></>: null

    return (
      <Nav className="ml-auto py-3" n avbar>  
        <strong>Search Request</strong>
        <InputGroup>
          <InputGroupAddon  addonType="prepend">
            <Button className="p-0" onClick={this.props.submit}><img style={{width:'25px'}} alt="searchMark" src={search}></img></Button>
          </InputGroupAddon>
          <Input name="place" placeholder="Enter Place Name" onChange={this.props.input}/>
        </InputGroup>
          {DesButton}
          {LocButton}

        <strong className={'mt-3'}>Make Request</strong>
        <NavItem className = 'Navbar_TradeMain mb-4'>
          <Button color="secondary" size="lg" block onClick={this.props.click}><strong>Make Request</strong></Button>
        </NavItem>

      </Nav>  
    )
  }
}

export default DeliverySideBar;