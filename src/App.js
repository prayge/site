import React from 'react';
import Navbar from './components/Navbar';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from "./components/pages/Home";

function App() {
	return (
		<>
			<Router>
				<Navbar />
				<Routes>
					<Route to="/" path="/" exact element={<Home />} />
					<Route path="/github" element={<Github />} />
					<Route path="/linkedin" element={<Linkedin />} />
				</Routes>
			</Router>
		</>
	);
}

function Github() {
	window.location.replace("https://github.com/prayge");
	return null;
}

function Linkedin() {
	window.location.replace(
		"https://www.linkedin.com/in/samuel-farquhar-881851146/"
	);
	return null;
}

export default App;
