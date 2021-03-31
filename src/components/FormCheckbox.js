import React, { Component } from 'react';
import "./FormCheckbox.scss";

class FormCheckbox extends Component {
	render() {
		const { checked, label, name, onChange } = this.props;

		return (
			<label className={`ts-form-checkbox${checked ? " checked" : ""}`}>
				<span>{label}</span>
				<input onChange={onChange} type="checkbox" checked={checked} name={name} />
			</label>
		);
	}
}

export default FormCheckbox;