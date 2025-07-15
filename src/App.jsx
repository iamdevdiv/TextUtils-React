import { FAQ } from "./components/FAQ";
import { Navbar } from "./components/Navbar";
import TextForm from "./components/TextForm";
import { Alert } from "./components/Alert";
import { useState, useRef } from "react";
import {
	BrowserRouter as Router,
	Routes,
	Route,
} from "react-router";

function App() {
	const [alert, setAlert] = useState({
		text: "",
		type: "",
	});
	const timeoutRef = useRef(null);

	const showAlert = (text, type) => {
		if (timeoutRef.current) {
			clearInterval(timeoutRef.current);
		}

		setAlert({
			text: text,
			type: type,
		});

		timeoutRef.current = setTimeout(() => {
			setAlert({
				text: "",
				type: "",
			});
		}, 3000);
	}

	return (
		<>
			<Router>
				<Navbar />
				<Alert alert={alert}/>
				<Routes>
					<Route path="/about" element={<FAQ/>}/>
					<Route path="/" element={<TextForm showAlert={showAlert}/>}/>
				</Routes>
			</Router>
		</>
	)
}

export default App;
