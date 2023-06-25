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
// import { SESClient, CloneReceiptRuleSetCommand } from "@aws-sdk/client-ses";

class ContactFormSection extends Component {
	constructor(props) {
		super(props);
		this.state = {
			submitted: false,
			name: "",
			email: "",
			company: "",
			message: "",
			number: "",
			services: "",
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
		this.sendAWSEmail();
		e.preventDefault();
		// if (this.state.name && this.state.email && this.state.message) {
		// 	if (/^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[A-Za-z]+$/.test(this.state.email)) {
		// 		this.setState({ loading: true, emailInvalid: false });
		// 		axios({
		// 			method: "POST",
		// 			url: "http://localhost:3002/send",
		// 			data: this.state,
		// 		}).then((response) => {
		// 			if (response.data.status === "success") {
		// 				this.setState({ submitted: true })
		// 			} else if (response.data.status === "fail") {
		// 				alert("Message failed to send.");
		// 			}
		// 		});
		// 	} else {
		// 		this.setState({emailInvalid: true})
		// 	}
		// } else {
		// 	this.setState({formInvalid: true})
		// }
	}

	sendAWSEmail() {
		console.log("State:", this.state);

		var name = this.state.name;
		var email = this.state.email;
		var company = this.state.company;
		var message = this.state.message;
		var other = this.state.other;
		var research = this.state.research;
		var number = this.state.number;
		var services = this.state.services;
		var wealth = this.state.wealth;
		var threeskyeX = this.state.threeskyeX;
		var headerStyle = "opacity: 0.7; color: #020a1d; font-size: 14px; width: 100%; margin-bottom: 0; font-weight: 500";
		var valueStyle = "font-size: 20px; width: 100%; margin-bottom: 36px; margin-top: 2px; font-weight: 500; color: #020A1D;";
		var hrStyle = "margin: 34px 0; border: none; height: 1px; width: 100%; background-color: #E2E4EA";
		var tokenActiveStyle = "display: inline-block; white-space: nowrap; font-size: 18px; padding: 3px 5px; background-color: #0D8EFD; font-weight: 400; color: #fff; border-radius: 5px; margin-right: 14px; margin-bottom: 8px;";
		var tokenDisabledStyle = "display: inline-block; white-space: nowrap; font-size: 18px; padding: 3px 5px; background-color: #D7D9DE; font-weight: 400; color: #fff; border-radius: 5px; margin-right: 14px; margin-bottom: 8px;";
		let html = "<div style='padding: 20px; padding-bottom: 40px; background-color: #f7f7f7; font-family: Google Sans'><div style='margin: 0 auto; box-shadow: 0px 2px 6px #0000001c; max-width: 700px; background-color: #fff; color: #02184a; padding: 20px 40px; padding-bottom: 50px; border-radius: 10px;'><hr style='"+hrStyle+"' /><h2 style='margin-bottom: 0; font-size: 21px; color: #020a1d;'>New 3SKYE website enquiry</h2><hr style='"+hrStyle+"' /><h4 style='"+headerStyle+"'>Name</h4><h3 style='"+valueStyle+"'>"+name+"</h3><h4 style='"+headerStyle+"'>Email</h4><h3 style='"+valueStyle+"'>"+email+"</h3><h4 style='"+headerStyle+"'>Company</h4><h3 style='"+valueStyle+"'>"+company+"</h3><h4 style='"+headerStyle+"'>Number</h4><h3 style='"+valueStyle+"'>"+number+"</h3><h4 style='"+headerStyle+"'>Service</h4><h3 style='"+valueStyle+"'>"+services+"</h3><h4 style='"+headerStyle+"'>Message</h4><h3 style='"+valueStyle+"'>"+message+"</h3><h4 style='margin-bottom: 6px !important; "+headerStyle+"'>Interest</h4><span style='"+(research ? tokenActiveStyle : tokenDisabledStyle)+"'>Research Platform</span><span style='"+(wealth ? tokenActiveStyle : tokenDisabledStyle)+"'>Wealth Platform</span><span style='"+(threeskyeX ? tokenActiveStyle : tokenDisabledStyle)+"'>3SKYE-x</span><span style='"+(other ? tokenActiveStyle : tokenDisabledStyle)+"'>Other</span></div></div>";

		// let html = `<body><p>New contact from ${this.state.name} ${this.state.email}</p><p>${this.state.message}</p>`;
		// if (this.state.research) {
		// 	html += '<p>Interested in research'
		// }
		// if (this.state.threeskyeX) {
		// 	html += '<p>Interested in threeskyeX'
		// }
		// if (this.state.wealth) {
		// 	html += '<p>Interested in wealth'
		// }
		
		
		this.setState({ loading: true, emailInvalid: false });
		axios({
			method: "POST",
			url: "https://aip1fd4b76.execute-api.ap-southeast-2.amazonaws.com/Production/contact-us",
			data: {
				"text":"",
				"html":html
			},
		}).then((response) => {
			console.log("Got response", response);
			if (response.data.MessageId) {
				this.setState({ submitted: true, loading:false })
			} else {
				this.setState({ loading:false })
				alert("Message failed to send.");
			}
		});
		
		
	}

	checkEmail(email) {
		if (/^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[A-Za-z]+$/.test(email)) {
			this.setState({ emailInvalid: false });
		}
	}

	resetForm(){
		this.setState({ emailInvalid: false, formInvalid: false, loading: false, submitted: false, name: "", email: "", company: "", message: "", services: "", number: "", other: false, research: false, threeskyeX: false, wealth: false });
	}

	render() {
		const { modalForm } = this.props;
		const { submitted, loading, name, email, message, formInvalid, emailInvalid, captchaChecked } = this.state;

		return (
			<TsContainer className={`contact-form-container${modalForm ? ' modal-form' : '' }`} bg="blue">
				{!submitted ? (
					<FadeInSection fadeUp={!modalForm} delay={modalForm ? "0" : "2"}>
						<form className="contact-form" onSubmit={this.handleSubmit} action="" autoComplete="off">
							<Row className="justify-content-center">
								<Col sm={modalForm && "12"} lg={modalForm ? "12" : "10"} xl={modalForm ? "12" : "8"} className={loading ? "submitting-form" : ""}>
									<InputField helperText={formInvalid && !name && "Please enter your name"} error={formInvalid && !name} required placeholder="Name" label="Your Name" name="name" onChange={this.handleInputChange} autoFocus />
									<InputField type="email" helperText={(formInvalid && !email && "Please enter your email address") || (emailInvalid && "Please enter a valid email address")} error={(formInvalid && !email) || emailInvalid} required placeholder="Email" label="Your Email Address" name="email" onChange={this.handleInputChange} />
									<InputField placeholder="Company" label="Company Name" name="company" onChange={this.handleInputChange} />
									<InputField type="number" placeholder="+64" label="Phone Number" name="phone" onChange={this.handleInputChange} />
									{!modalForm && <InputField helperText={formInvalid && !message && "Please enter a message"} error={formInvalid && !message} required placeholder="Message" label="Message/Comment" name="message" onChange={this.handleInputChange} />}
									{modalForm && <InputField placeholder="Services" label="Your Services" name="services" onChange={this.handleInputChange} />}
									{!modalForm && <FormCheckboxGroup
										onChange={this.handleInputChange}
										checkboxes={[
											{ label: "Research Platform", checked: this.state.research, name: "research" },
											{ label: "Wealth Platform", checked: this.state.wealth, name: "wealth" },
											{ label: "3SKYE-X", checked: this.state.threeskyeX, name: "threeskyeX" },
											{ label: "Other", checked: this.state.other, name: "other" },
										]}
									/>}
									<div className={modalForm ? "" : "mb-2 mt-5"}>
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