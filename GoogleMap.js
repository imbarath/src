import React, { Component } from 'react';
import { Button } from 'react-bootstrap';
import GoogleMapReact from 'google-map-react';
import './index.css';
import './App.css';
const ReactComponent = ({ text }) => <div>{text}</div>;
 
class GoogleMap extends Component {
  static defaultProps = {
    center: {
      lat: 34.0522,
      lng: 118.2437
    },
        zoom: 10
  };
 
  render() {
    return (
    <div>
      <div className="myhead">
      
         <input className="input" type="text" placeholder="Get a five-day forecast in your favrite cities" />

        <Button  className='primary btn-btn'>Submit</Button>
        </div>
                        
           <div className="row">
              <div className="col column-1">City</div>
              <div className="col column-2">Temperature(k)</div>
              <div className="col column-3">Pressure(hPa)</div>
              <div className="col column-4">Humidity(%)</div>
           </div>
          
        <div className="gmap" style={{height:'200px',width:'350px'}}>
      
      <GoogleMapReact
       bootstrapURLKeys={{ key: "AIzaSyBa-hYHMhGmuk9Xezwo-8XGn8BHQObAfzI", language: "eng"}}
       defaultCenter={this.props.center}
       defaultZoom={this.props.zoom} >


       <ReactComponent
        text={'Chicago'}
         lat={34.0522}
         lng={118.2437}
         />
       
      </GoogleMapReact>
      
     </div>
    
  </div>
  
      
    );
  }
}
 
export default GoogleMap;
