import React from "react";
import Navbar from "./components/Navbar";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/pages/Home";
import Contact from "./components/pages/Contact";
import About from "./components/pages/About";
import Skills from "./components/pages/Skills";
import Projects from "./components/pages/Projects";

function App() {
	return (
		<>
			<Router>
				<Navbar />
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/experience" element={<About />} />
					<Route path="/skills" element={<Skills />} />
					<Route path="/projects" element={<Projects />} />
					<Route path="/contact" element={<Contact />} />
				</Routes>
			</Router>
		</>
	);
}

export default App;
