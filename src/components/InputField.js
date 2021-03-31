import React, { Component } from 'react';
import { TextField } from '@material-ui/core';
import "./InputField.scss";

class InputField extends Component {
	render() {
		return <TextField {...this.props} fullWidth className="ts-input-field-wrapper" inputProps={{ className: "ts-input-field", name: this.props.name }} />;
	}
}
 
export default InputField;