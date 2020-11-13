import React, { useState } from 'react';
import data from './data';
function App() {
	const [ paragraphs, setParagraph ] = React.useState([]);
	const [ count, setCount ] = React.useState(0);

	const handleOnChange = (e) => {
		// console.log(e.target.value);
		setCount(e.target.value);
	};

	const handleParagraphs = (e) => {
		e.preventDefault();
		let dataArray = [];
		if (count <= 0) {
			dataArray.push(data[0]);
			setParagraph(dataArray);
		}

		if (count >= data.length) {
			data.map((item) => {
				dataArray.push(item);
			});
			setParagraph(data);
		}

		// console.log(e.target.value);
	};

	console.log(data.length);
	return (
		<main>
			<h2>Tired of boring lorem ipsum?</h2>
			<form onSubmit={(e) => handleParagraphs(e)}>
				<label htmlFor="paragraph">Paragraphs: </label>
				<input className="input-bar" name="paragraph" onChange={(e) => handleOnChange(e)} value={count} />
				<input type="submit" className="generate" value="GENERATE" />
				<div />
			</form>
			{paragraphs.length != 0 && (
				<div className="items">
					{paragraphs.map((item) => {
						return (
							<div className="item">
								<p>{item}</p>
							</div>
						);
					})}
				</div>
			)}
		</main>
	);
}

export default App;
