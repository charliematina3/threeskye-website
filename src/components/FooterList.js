import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import "./FooterList.scss";
import LinkList from './LinkList';


class FooterList extends Component {
	render() {
		const { header, headerPath, links, className } = this.props;

		return (
			<div className={`footer-list${className ? " " + className : ""}`}>
				{header && <NavLink className="footer-list-header" to={headerPath ? headerPath : ""}>{header}</NavLink>}
				<LinkList links={links} />
			</div>
		);
	}
}

export default FooterList;