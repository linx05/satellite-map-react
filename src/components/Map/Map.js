import React, { Component } from 'react';
import { compose, withProps } from 'recompose';
import {
  GoogleMap,
  Marker,
  withGoogleMap,
  withScriptjs
} from 'react-google-maps';

export class Map extends Component {
  componentDidMount() {
     this.props.startPollingSatelliteLocation();
  }

  render() {
    const { userLocation, marker } = this.props;

    return (
      <GoogleMap defaultZoom={4} defaultCenter={userLocation}>
        {marker && marker.lat && <Marker position={marker} />}
      </GoogleMap>
    );
  }
}

export default compose(
  withProps({
    googleMapURL: `https://maps.googleapis.com/maps/api/js?key=${
      process.env.REACT_APP_GOOGLE_API_KEY
    }&v=3.exp&libraries=geometry,drawing,places`,
    loadingElement: <div style={{ height: `100%` }} />,
    containerElement: <div style={{ height: `100%` }} />,
    mapElement: <div style={{ height: `100%` }} />
  }),
  withScriptjs,
  withGoogleMap
)(Map);
