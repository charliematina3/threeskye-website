import React, { Component } from 'react';
import "./BulletPointItem.scss";

class BulletPointItem extends Component {
	render() {
		const { children, className } = this.props;
		return (
			<div className={`bullet-point-item${className ? " " + className : ""}`}>
				{children}
			</div>
		);
	}
}
 
export default BulletPointItem;