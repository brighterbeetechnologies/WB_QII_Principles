import React from "react";
import { Link } from "react-router-dom";

export default function NotFound() {

	return (
		<div className=" ">
			<h1>Page Not Found</h1>
			<Link
				to="/"
				className=" "
			>
				Home
			</Link>
		</div>
	);
}
