import React from 'react';
import './App.css';
import Locale from './Locale';

class LocationsArea extends React.Component {
  getLocations() {
    let locations = [];

    for(const location of Object.entries(this.props.data)) {
      // console.log(location);
      locations.push (
        <Locale key={location[0]} data={location} locationList={location}/>
      )
    }
    return locations;
  }
  render() {
    return (
      <div style={{margin: '5px'}}>
        {this.getLocations()}
      </div>
    )
  }
}

export default LocationsArea;
