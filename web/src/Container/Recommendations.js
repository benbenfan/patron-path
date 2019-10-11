import React, { Component } from 'react'
import Select from 'react-select';
import axios from 'axios'
import "./Recommendations.css";

class Recommendations extends Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  state = {
    query: '',
    zip1: '',
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
        console.log(this.state.zips);
      })
      .catch(error => console.log(error));
  }
  showZip = zip => <div key={zip.distance}>{zip.name},{zip.name}</div>

  handleInputChange = selectedOption => {
    this.setState({ value: selectedOption.value });
  }

  handleCreditsKeyDown(e) {
    if(['0','1','2','3','4','5','6','7','8','9','Backspace','ArrowLeft','ArrowRight','ArrowUp','ArrowDown','Tab'].indexOf(e.key) === -1)
      e.preventDefault();
  }

  handleChange(event) {
    this.setState({ value: event.target.value });
  }

  handleSubmit = async event => {
    event.preventDefault();
    alert('Request Submitted: ' + this.state.value);
    // this.sendRequest();
    // this.HeaderPostAction();
    // const name = {
    //   name: this.state.value
    // };
    const name = this.state.value;
    axios.post(`/match`, { name })
      .then(data => {
        this.setState({ users: data.data.users });
        // console.log(name);
        // console.log(data.data);
        console.log(this.showUsers)
      })
  }

  render() {
    const { zips } = this.state;


    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label className="darken">
            <h1>Search Zip Codes:</h1>
            {/* <Select options={searchBy} onChange={this.handleInputChange} /> */}
          </label>
          <input className="submission" type="submit" value="Submit" />
        </form>

        <br />
        <h2>Recomendations by name</h2>
        {(this.state.zips)}
      </div>
    );
  }
}
export default Recommendations;