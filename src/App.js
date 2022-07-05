import React from "react";
import Navbar from "./components/Navbar";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/pages/Home";
import SkillsBar from "./components/pages/SkillsBar";
import CardSection from "./components/pages/CardSection";
import Contact from "./components/contact/Contact";
import About from "./components/pages/About";

function App() {
	return (
		<>
			<Router>
				<Navbar />
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/about" element={<About />} />
					<Route path="/skills" element={<SkillsBar />} />
					<Route path="/projects" element={<CardSection />} />
					<Route path="/contact" element={<Contact />} />
				</Routes>
			</Router>
		</>
	);
}

export default App;
