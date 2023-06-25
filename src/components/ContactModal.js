import React, { useState } from "react";
import Modal from "react-bootstrap/Modal";
import Button from "./Button";
import "./ContactModal.scss";
import ContactFormSection from "../sections/ContactFormSection";
import { Close } from "@material-ui/icons";

const ContactModal = () => {
	const [show, setShow] = useState(false);

	const handleClose = () => setShow(false);
	const handleShow = () => setShow(true);

	return (
		<>
			<Button onClick={handleShow}>Join the Mix</Button>
			<Modal clasName="" show={show} onHide={handleClose}>
				<div className="close-modal-icon-wrapper" onClick={() => handleClose()}>
					<Close className="close-modal-icon" />
				</div>
				<Modal.Header>
					<Modal.Title>Join the Mix</Modal.Title>
					<p>Fill in the form below or email us at info@3skye.com.</p>
				</Modal.Header>
				<Modal.Body>
					<ContactFormSection modalForm />
				</Modal.Body>
			</Modal>
		</>
	);
};

export default ContactModal;
