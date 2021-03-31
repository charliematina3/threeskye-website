import React, { Component } from 'react';
import "./Table.scss";

class Table extends Component {
	render() {
		const { headers, rows, className } = this.props;
		return (
			<table className={`ts-table${className ? " " + className : ""}`}>
				<thead>
					<tr>{headers && headers.length >= 0 && headers.map((header, idx) => <th key={idx}>{header}</th>)}</tr>
				</thead>
				<tbody>{rows && rows.length >= 0 && rows.map((row, idx) => <tr key={idx}>{row.map((cell, id) => <td key={id}>{cell}</td>)}</tr>)}</tbody>
			</table>
		);
	}
}
 
export default Table;