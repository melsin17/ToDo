import React, { useState } from "react";
import PropTypes from "prop-types";

export default function ToDo() {
	const [list, setList] = useState([]);
	const [item, setItem] = useState("");

	const getList = () => {
		return list.map((item, index) => <li key={index}>{item}</li>);
	};

	const handleSumbit = e => {
		e.preventDefault();
		setList(list.concat([item]));
	};

	return (
		<div>
			<form onSubmit={handleSumbit}>
				<input
					type="text"
					onChange={e => setItem(e.target.value)}
					placeholder="no tasks, add a task"
				/>
				<input type="submit" value="send" />
			</form>

			<ul>
				{" "}
				{list.length > 0 ? (
					getList()
				) : (
					<li>"What are we doing today"</li>
				)}
			</ul>
		</div>
	);
}
