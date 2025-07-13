import { useState } from 'react';

export default function TextForm(props) {
	const [text, setText] = useState("");

	const handleChange = (e) => {
		setText(e.target.value);
	}

	const handleUpcaseClick = (e) => {
		if (!text.trim()) return;

		setText(text.toUpperCase());
		props.showAlert("Text has been converted to uppercase.", "Success");
	}

	const handleLowcaseClick = (e) => {
		if (!text.trim()) return;

		setText(text.toLowerCase());
		props.showAlert("Text has been converted to lowercase.", "Success");
	}

	const handleClearClick = (e) => {
		if (!text.trim()) return;

		setText("");
		props.showAlert("Text has been cleared.", "Success");
	}

	const handleInvertClick = (e) => {
		if (!text.trim()) return;

		let invertedText = "";
		Array.from(text).forEach(char => {
			if (char.toUpperCase() === char) {
				invertedText += char.toLowerCase();
			} else {
				invertedText += char.toUpperCase();
			}
		});

		setText(invertedText);
		props.showAlert("Text's case has been inverted.", "Success");
	}

	const handleAltClick = (e) => {
		if (!text.trim()) return;

		let alternatingText = "";
		let alternate = true;
		Array.from(text).forEach(char => {
			if (alternate) {
				alternatingText += char.toLowerCase();
				alternate = false;
			} else {
				alternatingText += char.toUpperCase();
				alternate = true;
			}
		});

		setText(alternatingText);
		props.showAlert("Text has been converted to alternating case.", "Success");
	}

	return (
		<>
			<div className="w-5/6 my-4 mx-auto border border-gray-200 rounded-lg bg-gray-50 dark:bg-gray-700 dark:border-gray-600">
				<div className="px-4 py-2 bg-white rounded-t-lg dark:bg-gray-800">
					<label htmlFor="text" className="block text-lg font-medium text-gray-900 dark:text-white">Enter text below to start using utilities</label>
					<textarea id="text" rows="8" value={text} className="block p-2.5 my-5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Enter text here..." onChange={handleChange}></textarea>
				</div>

				<div className="flex items-center gap-2 px-3 py-2 border-t dark:border-gray-600 border-gray-200">
					<button className="inline-flex items-center py-2.5 px-4 text-xs font-medium text-center text-white bg-blue-700 rounded-lg focus:ring-4 focus:ring-blue-200 dark:focus:ring-blue-900 hover:bg-blue-800" onClick={handleUpcaseClick}>
						UPPERCASE
					</button>
					<button className="inline-flex items-center py-2.5 px-4 text-xs font-medium text-center text-white bg-blue-700 rounded-lg focus:ring-4 focus:ring-blue-200 dark:focus:ring-blue-900 hover:bg-blue-800" onClick={handleLowcaseClick}>
						lowercase
					</button>
					<button className="inline-flex items-center py-2.5 px-4 text-xs font-medium text-center text-white bg-blue-700 rounded-lg focus:ring-4 focus:ring-blue-200 dark:focus:ring-blue-900 hover:bg-blue-800" onClick={handleInvertClick}>
						iNVERT cASE
					</button>
					<button className="inline-flex items-center py-2.5 px-4 text-xs font-medium text-center text-white bg-blue-700 rounded-lg focus:ring-4 focus:ring-blue-200 dark:focus:ring-blue-900 hover:bg-blue-800" onClick={handleAltClick}>
						aLtErNaTiNg cAsE
					</button>
					<button className="inline-flex items-center py-2.5 px-4 text-xs font-medium text-center text-white bg-blue-700 rounded-lg focus:ring-4 focus:ring-blue-200 dark:focus:ring-blue-900 hover:bg-blue-800" onClick={handleClearClick}>
						Clear
					</button>
				</div>
			</div>

			<div className="block w-5/6 mx-auto border border-gray-200 rounded-lg bg-gray-50 dark:bg-gray-800 dark:border-gray-600">
				<div className="py-2 px-4">
					<h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Text Summary</h5>
					<p className="font-normal text-gray-700 dark:text-gray-400">{text.trim() === "" ? 0 : text.trim().split(" ").length} words and {text.length} characters</p>
					<p className="font-normal text-gray-700 dark:text-gray-400">{Math.round(0.008 * text.length * 10) / 10} minutes read</p>
				</div>

				<div className="py-2 px-4 border-t dark:border-gray-600 border-gray-200">
					<h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Preview</h5>
					{
						text.split("\n").map((para, i) => {
							return <p key={i} className="font-normal text-gray-700 dark:text-gray-400">{text.trim().length === 0 ? "No text entered" : para}</p>
						})
					}
				</div>
			</div>
		</>
	)
}
