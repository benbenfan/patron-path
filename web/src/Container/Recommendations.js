import React, { Component } from 'react'
import Select from 'react-select';
import axios from 'axios'
import "./Recommendations.css";

class Recommendations extends Component {
  constructor(props) {
    super(props);
    // this.state = {value: ''};

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  state = {
    query: '',
    value: '',
    selected: 0,
    users: [],
    searchBy: [
      { label: "find songs in best selling album", value: 0 },
      { label: "find songs with highest rating which is rock genre", value: 1 },
      { label: "find songs performed by most popular musician (highest number of tophits)", value: 2 },
      { label: "find songs performed by experiend musician (who performed the most number of songs)", value: 3 },
      { label: "find songs produced by company with the greatest number of signed artists", value: 4 },
    ]
  }
  componentDidMount() {
    this.getUsers();
  }


  getUsers = _ => {
    axios.get('/users')
      .then((data) => {
        // axios returns an object named data so data.data
        console.log(data.data.users);
        this.setState({ users: data.data.users });
      })
      .then(({ response }) => this.setState({ users: response.users }))
      .catch(error => console.log(error));
  }
  showUsers = user => <div key={user.SONG_ID}>{user.name}</div>

  // HeaderPostAction = () =>{
  //   // Send a POST request
  //     var reqData = {
  //         "username": "admin",
  //         "password": "admin123",
  //         "grant_type": "password"
  //     };
  //     //var reqData = "username=ganesh&password=123456&grant_type=password";
  //     axios({
  //         method: 'post',
  //         url: '/users',
  //         withCredentials: true,
  //         crossdomain: true,
  //         data: this.setState (reqData),    
  //     headers: { 
  //       "Content-Type": "application/x-www-form-urlencoded",
  //       "Cache-Control": "no-cache",
  //       "Postman-Token": "42e6c291-9a09-c29f-f28f-11872e2490a5"
  //     }
  //   }).then(function (response) {
  //     console.log("Heade With Authentication :" + response);
  //   })
  //   .catch(function (error) {
  //     console.log("Post Error : " +error);
  //   }); 
  // }


  // sendRequest = _ => {
  //   axios.post('http://localhost:3001/users', {
  //     firstName: 'Fred',
  //     lastName: 'Flintstone'
  //   })
  //   .then(function (response) {
  //     console.log(response);
  //   })
  //   .catch(function (error) {
  //     console.log(error);
  //   });
  // }

  handleInputChange = selectedOption => {
    // this.setState({
    //   query: this.search.value
    // }, () => {
    //   if (this.state.query && this.state.query.length > 1) {
    //     if (this.state.query.length % 2 === 0) {
    //       this.getInfo()
    //     }
    //   } 
    // })
    this.setState({ value: selectedOption.value });
  }

  handleChange(event) {
    // this.getInfo();
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
    axios.post(`/users`, { name })
      .then(data => {
        this.setState({ users: data.data.users });
        // console.log(name);
        // console.log(data.data);
        console.log(this.showUsers)
      })
  }

  render() {
    const { users, searchBy } = this.state;


    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label className="darken">
            <h1>Choose a Recomendation:</h1>
            <Select options={searchBy} onChange={this.handleInputChange} />
            {/* <input type="text" value={this.state.value} onChange={this.handleChange} /> */}
          </label>
          <input className="submission" type="submit" value="Submit" />
        </form>

        <br />
        <h2>Recomendations by name</h2>
        {users.map(this.showUsers)}
      </div>
    );
  }
}
export default Recommendations;