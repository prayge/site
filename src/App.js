import React from "react";
import Navbar from "./components/Navbar";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/pages/Home";
import SkillsBar from "./components/SkillsBar";
import CardSection from "./components/CardSection";
import Contact from "./components/Contact";

function App() {
	return (
		<>
			<Router>
				<Navbar />
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/skills" element={<SkillsBar />} />
					<Route path="/projects" element={<CardSection />} />
					<Route path="/contact" element={<Contact />} />
				</Routes>
			</Router>
		</>
	);
}

export default App;
