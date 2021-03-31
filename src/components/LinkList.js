import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import "./LinkList.scss";


class LinkList extends Component {
	render() {
		const { links, className, linkClassName } = this.props;

		return (
			<div className={`link-list${ className ? " " + className : ""}`}>
				{links &&
					links.map((link, idx) => (
						link.path ? (
							<NavLink activeClassName="active-option" className={`link-item${linkClassName ? " " + linkClassName : ""}`} exact={link.exact} key={idx} to={link.path}>
								{link.name}
							</NavLink>
						) : (
							<div className={`link-item${linkClassName ? " " + linkClassName : ""}`} key={idx}>
								{link.name}
							</div>
						)
					))}
			</div>
		);
	}
}

export default LinkList;