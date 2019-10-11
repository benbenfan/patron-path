/**
 * Sample page with a static query
 */
import React, { PureComponent } from 'react'
import axios from 'axios';
import Sidebar from './Sidebar';
import LocationsArea from './LocationsArea';

class Match extends PureComponent {
  state = {
    locations: [],
    listStates: [],
    filteredLocations: []
  }
  componentDidMount() {
    this.getLocations();
  }

  getLocations = _ => {
      axios.get('/zips')
      fetch('http://jsonplaceholder.typicode.com/users')
      .then(res => res.json())
      .then((data) => {
        this.setState({ contacts: data })
      })
      .catch(console.log)
  }
  getAllStates(data) {
    let states = [];
    states.push("ALL");
    for (const location of Object.values(data)) {
      if (!states.includes(location.statecode)) {
        states.push(location.statecode);
      }
    }
    states.sort();
    return states;
  }
  setLocations(locations) {
    this.setState({ filteredLocations: locations });
  }
  render() {//building react method that comes inse od react component

    return (//jsx code and can return only a single parent tag

      <div className="App">
        <link
          rel="stylesheet"
          href="https://maxcdn.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
          integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T"
          crossOrigin="anonymous"
        />

        <Sidebar class="side-tab" style={{ position: "fixed", zIndex: "100", transform: "rotate(180deg)" }} setLocations={(locations) => this.setLocations(locations)} locations={this.state.locations} listStates={this.state.listStates} />


        <div className="footer" style={{ marginLeft: '25vw', }}>
          <h2 className="insetshadow">Search Results:</h2>
          <LocationsArea data={this.state.filteredLocations} />
        </div>

      </div>
    );
  }
}
export default Match;