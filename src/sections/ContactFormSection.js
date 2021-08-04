import React, { Component } from 'react';
import { Row, Col } from 'react-bootstrap';
import TsContainer from '../components/TsContainer';
import InputField from '../components/InputField';
import "./ContactForm.scss";
import Button from '../components/Button';
import FormCheckboxGroup from '../components/FormCheckboxGroup';
import FadeInSection from '../components/FadeInSection';
import SectionHeader from '../components/SectionHeader';
import FocusParagraph from '../components/FocusParagraph';
import axios from 'axios';
import ReCAPTCHA from 'react-google-recaptcha';

class ContactFormSection extends Component {
	constructor(props) {
		super(props);
		this.state = {
			submitted: false,
			name: "",
			email: "",
			company: "",
			message: "",
			other: false,
			research: false,
			threeskyeX: false,
			wealth: false,
			loading: false
		};

		this.handleSubmit = this.handleSubmit.bind(this);
		this.handleInputChange = this.handleInputChange.bind(this);
		this.resetForm = this.resetForm.bind(this);
		this.checkEmail = this.checkEmail.bind(this);
	}

	handleInputChange(event) {
		const target = event.target;
		const value = target.type === "checkbox" ? target.checked : target.value;
		const name = target.name;

		this.setState({
			[name]: value,
		});
	}

	handleSubmit(e) {
		e.preventDefault();
		if (this.state.name && this.state.email && this.state.message) {
			if (/^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[A-Za-z]+$/.test(this.state.email)) {
				this.setState({ loading: true, emailInvalid: false });
				axios({
					method: "POST",
					url: "http://localhost:3002/send",
					data: this.state,
				}).then((response) => {
					if (response.data.status === "success") {
						this.setState({ submitted: true })
					} else if (response.data.status === "fail") {
						alert("Message failed to send.");
					}
				});
			} else {
				this.setState({emailInvalid: true})
			}
		} else {
			this.setState({formInvalid: true})
		}
	}

	checkEmail(email) {
		if (/^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[A-Za-z]+$/.test(email)) {
			this.setState({ emailInvalid: false });
		}
	}

	resetForm(){
		this.setState({ emailInvalid: false, formInvalid: false, loading: false, submitted: false, name: "", email: "", company: "", message: "", other: false, research: false, threeskyeX: false, wealth: false });
	}

	render() {
		const { bg } = this.props;
		const { submitted, loading, name, email, message, formInvalid, emailInvalid, captchaChecked } = this.state;

		return (
			<TsContainer className="contact-form-container" bg={bg ? bg : "white"}>
				{!submitted ? (
					<FadeInSection fadeUp delay="2">
						<form className="contact-form" onSubmit={this.handleSubmit} action="" autoComplete="off">
							<Row className="justify-content-center">
								<Col lg="10" xl="8" className={loading ? "submitting-form" : ""}>
									<InputField helperText={formInvalid && !name && "Please enter your name"} error={formInvalid && !name} required placeholder="Name" label="Your Name" name="name" onChange={this.handleInputChange} autoFocus />
									<InputField type="email" helperText={(formInvalid && !email && "Please enter your email address") || (emailInvalid && "Please enter a valid email address")} error={(formInvalid && !email) || emailInvalid} required placeholder="Email" label="Your Email Address" name="email" onChange={this.handleInputChange} />
									<InputField placeholder="Company" label="Company Name" name="company" onChange={this.handleInputChange} />
									<InputField helperText={formInvalid && !message && "Please enter a message"} error={formInvalid && !message} required placeholder="Message" label="Message/Comment" name="message" onChange={this.handleInputChange} />
									<FormCheckboxGroup
										onChange={this.handleInputChange}
										checkboxes={[
											{ label: "Research Platform", checked: this.state.research, name: "research" },
											{ label: "Wealth Platform", checked: this.state.wealth, name: "wealth" },
											{ label: "3Skye-X", checked: this.state.threeskyeX, name: "threeskyeX" },
											{ label: "Other", checked: this.state.other, name: "other" },
										]}
									/>
									<div className="mb-2 mt-5">
										<ReCAPTCHA sitekey="6LfnTacaAAAAAH_XDcjBwA9TXyT0oWCxmGAdsgjn" onChange={() => this.setState({captchaChecked: true})} />
									</div>
									<Button disabled={!captchaChecked} loading={loading} onClick={this.handleSubmit} type="submit" className="mt-4">
										{loading ? "Submitting" : "Submit"}
									</Button>
								</Col>
							</Row>
						</form>
					</FadeInSection>
				) : (
					<FadeInSection>
						<TsContainer className="p-0">
							<Row className="justify-content-center">
								<Col lg="10" xl="8" style={{marginBottom: 25}} className="d-flex align-items-center">
									<span className="material-icons-round mr-2 colour-blue">task_alt</span>
									<SectionHeader noMargin>Success</SectionHeader>
								</Col>
							</Row>
							<Row className="justify-content-center">
								<Col lg="10" xl="8">
									<FocusParagraph>
										Thanks for reaching out. One of the team will be in touch.
									</FocusParagraph>
								</Col>
								<Col lg="10" xl="8">
									<Button className="mt-4" onClick={this.resetForm}>Reload Form</Button>
								</Col>
							</Row>
						</TsContainer>
					</FadeInSection>
				)}
			</TsContainer>
		);
	}
}

export default ContactFormSection;