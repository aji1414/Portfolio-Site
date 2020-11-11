import React,{Component} from "react";
import "./Map.styles.scss";
import {GoogleMap, LoadScript, Circle} from "@react-google-maps/api";

  class Map extends Component {
    render() {
    const containerStyle = {
        width: '100%',
        height: '400px'
        };
        
    const center = {
    lat: 51.554970,
    lng: 0.207320
    };

      return (
        <LoadScript
          googleMapsApiKey="AIzaSyCxfwfKA9q27fHooRIRs-mVkt9Z94iS6P4"
        >
          <GoogleMap
            mapContainerStyle={containerStyle}
            center={center}
            zoom={10}
          >
            <Circle
            center={center}
            radius={1000}>

            </Circle>
            { /* Child components, such as markers, info windows, etc. */ }
            <></>
          </GoogleMap>
        </LoadScript>
      )
    }
  }

export default React.memo(Map);