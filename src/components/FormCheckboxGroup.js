import React, { Component } from 'react';
import FormCheckbox from './FormCheckbox';
import "./FormCheckboxGroup.scss";

class FormCheckboxGroup extends Component {
	render() {
		const { checkboxes, onChange } = this.props;

		return (
			<div className="form-checkbox-group">
				<label className="group-label">Product Interest</label>
				{checkboxes && checkboxes.length >= 0 &&
					checkboxes.map((checkbox, idx) => <FormCheckbox key={idx} label={checkbox.label} checked={checkbox.checked} name={checkbox.name} onChange={onChange} />)}
			</div>
		);
	}
}

export default FormCheckboxGroup;