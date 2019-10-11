import React from 'react';
import "./Messaging.css";
import axios from 'axios'
import Select from 'react-select';

const { Component } = React;

class Messaging extends Component {
	constructor(props) {
		super(props);
		this.state = {
			messages: [],
			query: '',
			members: [
				{ label: "No users: Check Server Status", value: 'undefined', id:'undefined' },
			  ],
			searchVal: 0
		};
		this.handleChange = this.handleChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
	}
	
	componentDidMount() {
		this.getUsers();
		this.getMessages();
	}

	buildQuery(user, msg) {
		var str = 'INSERT INTO `logs`(`time`,`user_id`,`line_text`,`room_id`,`chat_id`) VALUES (NOW(),';
		if(user !== 'undefined'&& msg !== 'undefined'){
			let customID = user.id + Date.now();
			str += '"' + user.id + '","' + msg + '","0000","' + customID + '");';
		}
		return str;
	}

	getMessages = _ => {
		axios.get('/chat')
			.then((data) => {
				// axios returns an object named data so data.data
				this.setState({ messages: data.data.users });
			})
			.catch(error => console.log(error));
	}
	showMessages = msg => <div key={msg.chat_id}>{msg.user_id + " : " + msg.line_text + "  " + msg.time}</div>

	getUsers = _ => {
		axios.get('/users')
			.then((data) => {
				// axios returns an object named data so data.data
				var display = [];
					for(var i = 0; i< data.data.users.length; i++){
						var toAdd = {
							label : data.data.users[i].handle,
							value : i,
							id : data.data.users[i].user_id
						};
						// console.log(toAdd);
						display[i] = toAdd
					}
				this.setState({ members: display});	
			})
			.catch(error => console.log(error));
	}
	
	handleChange(event) {
		// if (event.target.value.split(' ').length > 1) {
		// 	alert('Please only search one word');
		// 	return;
		// } else if (/[^A-Za-z\d]/.test(event.target.value)) {
		// 	alert("Please enter only letter and numeric characters");
		// 	return;
		// }
		this.setState({ query: event.target.value });
		// console.log(event.target.value);
	}

	handleInputChange = async selectedOption => {
		let newVal = selectedOption.value
		this.setState({ searchVal: newVal });
		// this.setState({ searchVal: selectedOption.value });
		console.log("select val: " + selectedOption.value);
		console.log("state val: " + this.state.searchVal);
	}

	handleSubmit = async event => {
		event.preventDefault();
		const userData = this.state.members[this.state.searchVal];
		const search = this.state.query;
		var newMsg = this.buildQuery(userData, search);
		alert('Request Submitted: ' + newMsg);
		// console.log(newMsg);
		axios.post(`/chat`, { newMsg })
			.then(data => {
				// this.setState({ messages: data.data.users });
			})
		this.getMessages();
	}

	render() {
		const { messages, members } = this.state;
		return (
			<form className="switch-field" onSubmit={this.handleSubmit}>
				<h4>Select User:</h4>
				
				<Select options={members} onChange={this.handleInputChange} />
				<h3>Enter Message:</h3>
				<input type="text" className="text" value={this.state.query} onChange={this.handleChange} />
				<input className="submission" type="submit" value="Submit" />
				<br />
				<div className = "default">
				<h2>All Messages</h2>
				{messages.map(this.showMessages)}
				</div>
				
				{/* {tables.map(this.tableArray)} */}
			</form>
			

		);
	}
}

export default Messaging;
// Render to DOM