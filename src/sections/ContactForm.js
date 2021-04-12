import React, { Component } from 'react';
import { Row, Col } from 'react-bootstrap';

class ContactForm extends Component {
	render() { 
		return (
			<form className="contact-form" onSubmit={this.handleSubmit} action="" autoComplete="off">
				<Row className="justify-content-center">
					<Col lg="10" xl="8">
						<InputField required placeholder="Wanda Maximoff" label="Your Name" name="name" onChange={this.handleInputChange} autoFocus />
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
						<Button onClick={this.handleSubmit} type="submit" className="mt-4">
							Submit
						</Button>
					</Col>
				</Row>
			</form>
		);
	}
}
 
export default ContactForm;