import React, { useState } from "react";

//create your first component
const Home = () => {
	const [color, setColor] = useState("");

	const turn = (color) => setColor(color);

	const Control = () => {
		setTimeout(() => {
			if (color === "red") {
				turn("orange");
			} else if (color === "green") {
				turn("red");
			} else {
				turn("green");
			}
		}, 500);
	};

	return (
		<div className="container">
			<div className="buttons p-4">
				<button
					onClick={() => Control()}
					type="button"
					className="Random"
					class="btn btn-warning">
					Random color
				</button>
			</div>
			<div className="traffic-light">
				<div
					onClick={() => setColor("red")}
					className={
						"light red" + (color === "red" ? " led" : "")
					}></div>
				<div
					onClick={() => setColor("orange")}
					className={
						"light orange" + (color === "orange" ? " led" : "")
					}></div>
				<div
					onClick={() => setColor("green")}
					className={
						"light green" + (color === "green" ? " led" : "")
					}></div>
			</div>
		</div>
	);
};

export default Home;
