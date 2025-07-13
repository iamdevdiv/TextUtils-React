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
	const [alert, setAlert] = useState(null);
	const timeoutRef = useRef(null);

	const showAlert = (text, type) => {
		if (timeoutRef.current) {
			clearInterval(timeoutRef.current);
		}

		setAlert({
			type: type,
			text: text,
		});

		timeoutRef.current = setTimeout(() => {
			setAlert(null);
		}, 3000);
	}

	return (
		<>
			<Router>
				<Navbar />
				<Alert alert={alert}/>
				<Routes>
					<Route path="/about" element={<FAQ/>}/>
						{/* <FAQ/> */}
					{/* </Route> */}
					<Route path="/" element={<TextForm/>}/>
						{/* <TextForm showAlert={showAlert}/> */}
					{/* </Route> */}
				</Routes>
			</Router>
		</>
	)
}

export default App;
