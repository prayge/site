import React from "react";
import Navbar from "./components/Navbar";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/pages/Home";
import SkillsBar from "./components/SkillsBar";
import CardSection from "./components/CardSection";

function App() {
	return (
		<>
			<Router>
				<Navbar />
				<Routes>
					<Route path="/" exact element={<Home />} />
					<Route path="/skills" element={<SkillsBar />} />
					<Route path="/projects" element={<CardSection />} />
				</Routes>
			</Router>
		</>
	);
}

export default App;
