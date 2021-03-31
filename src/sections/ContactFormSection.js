import React, { Component } from 'react';
import TsContainer from '../components/TsContainer';
import InputField from '../components/InputField';
import "./ContactForm.scss";
import Button from '../components/Button';
import FormCheckboxGroup from '../components/FormCheckboxGroup';

class ContactFormSection extends Component {
	constructor(props) {
		super(props);
		this.state = {
		};
		
		this.handleSubmit = this.handleSubmit.bind(this);
		this.handleInputChange = this.handleInputChange.bind(this);
	}

	handleInputChange(event) {
		const target = event.target;
		const value = target.type === 'checkbox' ? target.checked : target.value;
		const name = target.name;
	
		this.setState({
		  [name]: value
		});
	  }

	handleSubmit() {
		console.log(this.state);
	}
	
	render() {
		return (
			<TsContainer className="contact-form-container">
				<form className="contact-form" onSubmit={this.handleSubmit} action="">
					<InputField required placeholder="Wanda Maximoff" label="Your Name" name="name" onChange={this.handleInputChange} />
					<InputField required placeholder="wanda@hydra.com" label="Your Email Address" name="email" onChange={this.handleInputChange} />
					<InputField placeholder="Hydra" label="Company Name" name="company" onChange={this.handleInputChange} />
					<InputField placeholder="..." label="Message/Comment" name="message" onChange={this.handleInputChange} />
					<FormCheckboxGroup
						onChange={this.handleInputChange}
						checkboxes={[
							{ label: "Research Platform", checked: this.state.research, name: "research" },
							{ label: "Wealth Platform", checked: this.state.wealth, name: "wealth" },
							{ label: "3Skye-X", checked: this.state.threeskyeX, name: "threeskyeX" },
							{ label: "Other", checked: this.state.other, name: "other" },
						]}
					/>
					<Button onClick={this.handleSubmit} type="submit" style={{ marginTop: 40 }}>
						Submit
					</Button>
				</form>
			</TsContainer>
		);
	}
}
 
export default ContactFormSection;