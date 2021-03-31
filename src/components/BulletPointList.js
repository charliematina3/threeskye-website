import React, { Component } from 'react'
import BulletPointItem from './BulletPointItem';

class BulletPointList extends Component {
	render() {
		const { bullets, header } = this.props;
		return (
			<div className="bullet-point-list" style={{marginBottom: 35}}>
				{header && <h4>{header}</h4>}
				{bullets && bullets.length >= 0 && bullets.map((bullet, idx) => (
					<BulletPointItem key={idx}>{bullet}</BulletPointItem>
				))}
			</div>
		);
	}
}
 
export default BulletPointList;