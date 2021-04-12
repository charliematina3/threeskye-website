import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import BulletPointList from '../components/BulletPointList';
import TsContainer from '../components/TsContainer';
import ExpandableTextSection from '../components/ExpandableTextSection';
import SectionHeader from '../components/SectionHeader';
import Table from '../components/Table';
import PrivacyPolicySection, { PrivacyPolicyTextSection } from '../sections/PrivacyPolicySection';

class PrivacyPolicyPage extends Component {
	componentDidMount() {
		window.scrollTo(0, 0)
	}
	render() { 
		return (
			<div className="bg-white">
				<TsContainer bg="white" className="pb-0">
					<SectionHeader noMargin>Privacy Policy</SectionHeader>
				</TsContainer>
				<PrivacyPolicySection header="Who are we">
					<p>
						We are an NZ based company.
						<br />
						3Skye’s head office is
						<br />
						Level 11, Equinox House
						<br />
						111 The Terrace
						<br />
						Wellington 6011
						<br />
						Email: privacy@3skye.com
						<br />
						Our Data Protection Officer (DPO) is Genevieve Hancock
					</p>
				</PrivacyPolicySection>
				<PrivacyPolicySection header="Types of data we collect">
					<ExpandableTextSection
						defaultContent={
							<>
								<BulletPointList header="When you use our website:" bullets={["Data that identifies you.", "Data on how you use our website."]} />
								<BulletPointList
									header="When you purchase and use 3Skye products and services"
									bullets={["Contact details.", "Financial information.", "Data regarding your clients"]}
								/>
							</>
						}
						expandContent={
							<>
								<BulletPointList
									header="When you use our website:"
									bullets={[
										"Data that identifies you. Your IP address, login information, browser type and version, time zone setting, browser plug-in types, geolocation information about where you might be, operating system and version.",
										"Data on how you use our website. Your URL clickstreams (the path you take through our site), products/services viewed, page response times, download errors, how long you stay on our pages, what you do on those pages, how often, and other actions.",
									]}
								/>
								<BulletPointList
									header="When you purchase and use 3Skye products and services:"
									bullets={[
										"Contact details. The personal contact information you provide such as your name, address, telephone number and email address",
										"Financial information. Your organisation’s bank account number etc.",
										"Data regarding your clients. The data that you input onto the 3Skye products and services (client details, financial information etc).",
									]}
								/>
							</>
						}
					/>
				</PrivacyPolicySection>
				<PrivacyPolicySection header="How and why do we use your data?">
					<ExpandableTextSection
						extension
						defaultContent={
							<BulletPointList
								bullets={[
									"The inputs needed for 3 Skye products and services (eg your client’s details).",
									"Information to manage your requests and our relationship.",
									"To keep tax records.",
									"To keep tax records.",
									"To assist with your support request.",
								]}
							/>
						}
						expandContent={
							<>
								<PrivacyPolicyTextSection
									header="Purpose"
									content="We only use your data for certain reasons and where we have a legal basis to do so. Here are the reasons for which we process your data:"
								/>
								<PrivacyPolicyTextSection
									header="Your requests"
									content="Managing your service-related requests (processing which is part of the 3Skye services such as initiating forms, connecting your account to
									other services), login and authentication, remembering your settings, processing payments, hosting and back-end infrastructure."
								/>
								<PrivacyPolicyTextSection
									header="Improving 3Skye"
									content="Testing features, managing landing pages, heat mapping our site, traffic optimization and data analysis and research, including profiling and the use of machine learning and other techniques over your data and in some cases using third parties to do this."
								/>
								<PrivacyPolicyTextSection
									header="Customer support"
									content="Notifying you of any changes to our service, resolving support issues via live chat support, phone or email including any bug fixing."
								/>
								<PrivacyPolicyTextSection
									header="Marketing purposes (with your consent)"
									content="Sending you emails and messages about new features, products and services, and content."
								/>
							</>
						}
					/>
				</PrivacyPolicySection>
				{/* Needs Table */}
				<PrivacyPolicySection header="How do you use tracking technologies including cookies?">
					<ExpandableTextSection
						extension
						defaultContent={
							<BulletPointList
								bullets={[
									"We use cookies and other similar tracking technologies for a variety of purposes.",
									"If you wish you can turn tracking technologies off.",
									"We do not track your mouse over time or track you on other websites.",
								]}
							/>
						}
						expandContent={
							<>
								<p>The table below sets out the main tracking technologies that we use and what we use them for.</p>
								<Table
									headers={["Type of Technology", "Expires After", "Purpose"]}
									rows={[
										["Cookie", "1 year but refreshed on each login.", "Stores username so you don’t need to enter it each visit"],
										[
											"Cookie",
											"1 year, but will be replaced when the 2fa validity period ends",
											"Identifies that you have performed two-factor authentication on this browser",
										],
										["Cookie", "10 years", "Identifies that you have accepted our use of cookies"],
										["Session Storage", "When the browser is closed", "Authentication Token"],
										["In Page", "When you navigate away from 3Skye, or close the tab", "Account data and personal information for display"],
									]}
								/>
								<p>We do not track you over time and across other websites or allow third parties to do this whilst you are using our services.</p>
							</>
						}
					/>
				</PrivacyPolicySection>
				<PrivacyPolicySection header="What legal basis do we have for processing your personal information?">
					<ExpandableTextSection
						extension
						defaultContent={
							<BulletPointList
								bullets={["We process your personal information based on our Customer Agreement to provide you with services or as per your consent."]}
							/>
						}
						expandContent={
							<p>
								We process your personal information because you have given us permission and we need to process the information to provide the services you have
								requested and/or to fulfil our Customer Agreement with you. We may also process your personal information to comply with the law e.g. our tax
								obligations.
							</p>
						}
					/>
				</PrivacyPolicySection>
				<PrivacyPolicySection header="Who do we share your information with?">
					<ExpandableTextSection
						extension
						defaultContent={
							<BulletPointList
								bullets={[
									"We may share your information with our sub-processors.",
									"If you are a team member we may share information with the account holder.",
									"We will share your information with third parties where you asked to have this occur.",
									"We do not share your personal information with third parties for their own direct marketing purposes.",
									"We may share anonymised information regarding you with third parties.",
								]}
							/>
						}
						expandContent={
							<>
								<p>
									We utilise a number of sub-processors to enable the provision of services to you. Personal information may be provided to these sub processors
									as part of delivery of the services.
								</p>
								<br />
								<p>We will supply account holders with information regarding team members activities on request.</p>
								<br />
								<p>
									We will share your information with third parties when you request this. If you connect with a third party service e.g. Xero, Dropbox, we will
									share the required personal information to allow you to use this service.
								</p>
								<br />
								<p>
									We may share anonymised information (not personal information) regarding your website usage with third parties to assist us in improving our
									services to you.
								</p>
								<br />
								<p>
									We do not share your personal information with third parties for their own direct marketing purposes. We also do not sell or trade in your
									personal information for any other reason.
								</p>
								<br />
								<p>We do not disclose your personal information to any third party other than those described previously or when legally mandated.</p>
							</>
						}
					/>
				</PrivacyPolicySection>
				<PrivacyPolicySection header="How do we secure your information?">
					<ExpandableTextSection
						extension
						defaultContent={
							<BulletPointList
								bullets={[
									"We hold your personal information in a controlled and secure environment.",
									"Your information is protected from unauthorised access, use and disclosure.",
									"We will share your information with third parties where you asked to have this occur.",
									"We do not share your personal information with third parties for their own direct marketing purposes.",
									"We may share anonymised information regarding you with third parties.",
								]}
							/>
						}
						expandContent={
							<>
								<p>
									We use appropriate technical, organizational and administrative security measures to protect any information we hold from loss, misuse, and
									unauthorised access, disclosure, alteration and destruction.
								</p>
								<br />
								<p>
									You must prevent unauthorised access to your account by selecting and protecting your password appropriately and limiting access to your
									computer or device and browser by signing off after you have finished accessing your account.
								</p>
							</>
						}
					/>
				</PrivacyPolicySection>
				<PrivacyPolicySection header="Do we use automated decision making or profiling?">
					<ExpandableTextSection hideButton defaultContent={<BulletPointList bullets={["We do not use automated decision making or profiling."]} />} />
				</PrivacyPolicySection>
				<PrivacyPolicySection header="How long do we keep your information?">
					<ExpandableTextSection
						extension
						defaultContent={<BulletPointList bullets={["We only keep your personal information for as long as it is required."]} />}
						expandContent={
							<>
								<BulletPointList
									header="We will keep your personal information:"
									bullets={[
										"Until we no longer have a valid reason for keeping it",
										"Until you request us to stop using it.",
										"For as long as required by law e.g we keep invoice information for 7 years to fulfil our tax obligations.",
									]}
								/>
								<p>
									We may keep just enough of your personal information to ensure that we comply with your requests not use your personal information or comply
									with your right to deletion.
								</p>
							</>
						}
					/>
				</PrivacyPolicySection>
				{/* Template */}
				<PrivacyPolicySection header="Where do we hold your information?">
					<ExpandableTextSection
						extension
						defaultContent={
							<BulletPointList
								bullets={["We hold most of your information in New Zealand and Australia.", "We do hold some of your information in other locations"]}
							/>
						}
						expandContent={
							<>
								<BulletPointList header="We hold your personal information in the following locations:" bullets={["New Zealand", "Australia", "Other locations"]} />
								<BulletPointList
									header="Wherever your information is held we ensure your rights are protected. We do this by:"
									bullets={[
										"Holding information in countries with an adequacy determination (note New Zealand is one of these).",
										"Ensuring we have suitable legal contracts.",
									]}
								/>
							</>
						}
					/>
				</PrivacyPolicySection>
				<PrivacyPolicySection header="What are your rights?">
					<ExpandableTextSection
						extension
						defaultContent={
							<BulletPointList
								header="You have the following rights in relation to your personal information:"
								bullets={[
									"The right to be informed.",
									"The right to access.",
									"The right to correction.",
									"The right to deletion.",
									"The right to restrict processing.",
									"The right to data portability.",
									"The right to object.",
									"The right to withdraw consent.",
									"The right to complain.",
								]}
							/>
						}
						expandContent={
							<Table
								headers={["Right", "How we Protect Your Right"]}
								rows={[
									["The right to be informed", "We have published this Privacy Notice to keep you informed as to what we do with your personal information. We strive to be transparent about how we use your personal information"],
									["The right to access", <>You have the right to access your information. Please <Link to="/get-in-touch">email us</Link> if you wish to access the personal information we hold about you</>],
									["The right to correction", <>If the information we hold about you is inaccurate or not complete, you have the right to ask us to rectify it. You can correct your information either within your account or by emailing us</>],
									["The right to deletion", <>This is sometimes called ‘the right to be forgotten’. If you want us to delete all your personal information please <Link to="/get-in-touch">email us</Link></>],
									["The right to restrict processing", <>You have the right to ask us to restrict how we process your personal information. This means We are permitted to store the data but not further process it. If you want us to restrict the processing of your information, please <Link to="/get-in-touch">email us</Link></>],
									["The right to data portability", <>We will allow you to obtain and reuse your personal information for your own purposes across services in a safe and secure way. Please <Link to="/get-in-touch">email us</Link> if you wish to port your information</>],
									["The right to object", <>You have the right to object to how we process your personal information. If you wish to object please <Link to="/get-in-touch">email us</Link></>],
									["The right to withdraw consent", <>If you have given us your consent to process your personal information but change your mind later, you have the right to withdraw your consent at any time. If you want to withdraw your consent, please <Link to="/get-in-touch">email us</Link></>],
									["The right to complain to a Supervisory Authority", <>You have the right to complain if you feel that we have not responded to your requests to solve a problem</>]
								]}
							/>
						}
					/>
				</PrivacyPolicySection>
				{/* Template */}
				<PrivacyPolicySection header="How do I lodge a complaint?">
					<ExpandableTextSection
						extension
						defaultContent={
							<BulletPointList
								bullets={[
									"You can make a complaint directly to our Privacy Officer.",
									"You can also make a complaint to the New Zealand Privacy Commissioner.",
									"For more information about how to lodge a complaint, please click here.",
								]}
							/>
						}
						expandContent={
							<>
								<p>
									You can complain by writing to: <br />
									The Privacy Officer <br />
									3Skye Limited <br />
									Level 11, Equinox House
									<br /> 111 The Terrace
									<br /> Wellington 6011
								</p>
								<p>
									Or <Link to="/get-in-touch">email us.</Link>
								</p>
								<p>
									You also have the right to make a complaint to the New Zealand Office of the Privacy Commissioner. Information about how to lodge a complaint is
									available on their{" "}
									<a href="https://www.privacy.org.nz/" target="_blank" rel="noreferrer">
										website
									</a>
									.
								</p>
							</>
						}
					/>
				</PrivacyPolicySection>
				<PrivacyPolicySection noDivider style={{ paddingBottom: 100 }} header="Will you change this privacy notice?">
					<ExpandableTextSection
						extension
						defaultContent={<BulletPointList bullets={["We may change this notice from time to time."]} />}
						expandContent={
							<p>
								We may change this notice from time to time in the future. Any such changes will be posted here and, where appropriate, notified to you in writing.
								We advise you to check back frequently to see any updates or changes.
							</p>
						}
					/>
				</PrivacyPolicySection>
			</div>
		);
	}
}
 
export default PrivacyPolicyPage;