import React from "react";
import { Marker,InfoWindow} from "react-google-maps";


export default class DoctorMarker extends React.Component {

  state = {
		zoom: 11,
		isOpen: false
	}

  handleToggleOpen = () => {

    this.setState({
      isOpen: true
    });
  }
  
  handleToggleClose = () => {
    this.setState({
      isOpen: false
    });
  }

  render(){
    return(
        <Marker
          position={this.props.location}
          // title="Prooject name : Apploye"
        // backgroundColor="#fff"
        onClick={this.handleToggleOpen}
          
        >
        {this.state.isOpen && 
       <InfoWindow
       onCloseClick={this.handleToggleClose}
       >
     <span><h1>Project name:Apploye</h1>
     <p>project details opkweqriweiuri</p>
     </span>
   </InfoWindow>
        }
        </Marker>
    );
  }
}