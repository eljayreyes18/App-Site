import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

class Register extends Component {
	constructor(props) {
		super(props);

		this.state = {
			fullname: '',
			email: '',
			username: '',
			password: ''
		};

		this.update = this.update.bind(this);

		this.displayLogin = this.displayLogin.bind(this);
	}

	update(e) {
		let name = e.target.name;
		let value = e.target.value;
		this.setState({
			[name]: value
		});
	}

	displayLogin(e) {
		e.preventDefault();
		console.log('You have successfully registered');
		console.log(this.state);
		alert("You have successfully registered");
		this.setState({
			fullname: '',
			email: '',
			username: '',
			password: '',
		});

		axios.post('https://apizxc.herokuapp.com/users', {
   	   	    fullname: '',
			email: '',
			username: '',
			password: '',
	   		 })
 			 .then(function (response) {
 			   console.log(response);
 			 })
 			 .catch(function (error) {
 			   console.log(error);
 			 });

	}

	render() {
		return (
			<div className="register">
				<form onSubmit={this.displayLogin}>
					<h2>Register</h2>

					<div className="name">
						<input
							type="text"
							placeholder="Full Name"
							name="fullname"
							value={this.state.fullname}
							onChange={this.update}
						/>
					</div>

					<div className="email">
						<input
							type="text"
							placeholder="Enter your email"
							name="email"
							value={this.state.email}
							onChange={this.update}
						/>
					</div>

					<div className="username">
						<input
							type="text"
							placeholder="Enter your username"
							name="username"
							value={this.state.username}
							onChange={this.update}
						/>
					</div>

					<div className="pasword">
						<input
							type="password"
							placeholder="Password"
							name="password"
							value={this.state.password}
							onChange={this.update}
						/>
					</div>

					<div className="password">
						<input type="password" placeholder="Confirm Password" name="password1" />
					</div>

					<input type="submit" value="Register" />
				</form>

				<Link to="/">Login Here</Link>
			</div>
		);
	}
}

export default Register;
