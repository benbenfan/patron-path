import React, { Component } from 'react'
import Select from 'react-select';
import axios from 'axios'
import "./Recommendations.css";

class Recommendations extends Component {
  constructor(props) {
    super(props);
    this.handleDistance = this.handleDistance.bind(this);
    this.handleZip1 = this.handleZip1.bind(this);
    this.handleZip2 = this.handleZip2.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  state = {
    query: '',
    zip1: '',
    value: '',
    zip2: '',
    zips: [],
  }
  componentDidMount() {
    this.getZip();
  }

  getZip = _ => {
    axios.get('/match')
      .then((data) => {
        // axios returns an object named data so data.data

        this.setState({ zips: data.data.zipList });
        // console.log(this.state.zips);
      })
      .catch(error => console.log(error));
  }
  showZip = zip => <div key={zip.distance}>{zip.name},{zip.name}</div>

  handleDistance(event) {
    if (event.target.value.split(' ').length > 1) {
			alert('Please only search one word');
			return;
    }
    //  else if (!/[0-9]|\./.test(event.target.value)) {
		// 	alert("Please enter only letter and numeric characters");
		// 	return;
		// }
		this.setState({ value: event.target.value });
  }
  handleZip1(event) {
    if (event.target.value.split(' ').length > 1) {
			alert('Please only search one word');
			return;
    }
		this.setState({ zip1: event.target.value });
  }

  handleZip2(event) {
    if (event.target.value.split(' ').length > 1) {
			alert('Please only search one word');
			return;
    }
		this.setState({ zip2: event.target.value });
  }

  showData

  handleSubmit = async event => {
    event.preventDefault();
    alert('Request Submitted: ' + this.state.value);
    // this.sendRequest();
    // this.HeaderPostAction();
    // const name = {
    //   name: this.state.value
    // };
    const zip1 = this.state.zip1;
    const zip2 = this.state.zip2;
    const distance = this.state.value;
    
    axios.post(`/match`, { zip1,zip2,distance })
      .then(data => {
        this.setState({ zips: data.data.zipList });
        console.log(this.state.zips);
      })
  } 
  showData() {
    
    // return <div>zip code 1: {this.state.zips.zip_code1}<br></br>
    // zip code 2: {this.state.zips.zip_code2}<br></br>
    // Distance: {this.state.zips.distance}</div>
    
  }
  render() {
    return (
      <div className="darken">
        <form onSubmit={this.handleSubmit}>
          <label >
            <h1>Search Zip Codes:</h1>
            Zip Code 1:<br></br>
            <input type="text" value={this.state.zip1} onChange={this.handleZip1}></input><br></br>
            Zip Code 2:<br></br>
            <input type="text" value={this.state.zip2} onChange={this.handleZip2} /><br></br>
            Distance:<br></br>
            <input type="text" value={this.state.value} onChange={this.handleDistance} /><br></br>
          </label>
          <input className="submission" type="submit" value="Search" />
        </form>

        <br />
        <h2>Results</h2>
        {(this.state.zips)}
        {this.showData()}
      </div>
    );
  }
}
export default Recommendations;