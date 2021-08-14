import React from "react";
import Joi from "joi-browser";
import Form from "./common/form";

class LoginForm extends Form {
	state = {
		data: {
			username: "",
			password: "",
		},
		errors: {},
	};

	schema = {
		username: Joi.string().required().email().label("Email"),
		password: Joi.string().required().min(5).label("Password"),
	};

	doSubmit = () => {
		console.log("Submitted");
	};

	render() {
		return (
			<div>
				<h1>Login</h1>
				<form onSubmit={this.handleSubmit}>
					{this.renderInput("username", "Email")}
					{this.renderInput("password", "Password", "password")}
					{this.renderButton("Label")}
				</form>
			</div>
		);
	}
}

export default LoginForm;
