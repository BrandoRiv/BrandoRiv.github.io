import { useState } from "react";
import "./styles/tailwind.css";
import Intro from "./components/Intro";
import Projects from "./components/Portfolio";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import About from "./components/About";

function App() {
	return (
		<div className="min-h-screen">
			<Navbar />
			<div className="flex-grow p-4 space-y-16">
				{" "}
				{/* Applied consistent spacing */}
				{/* Each component gets a uniform padding */}
				<div id="intro" className="text-3xl">
					<Intro />
				</div>
				<div id="about" className="text-3xl">
					<About />
				</div>
				<div id="projects" className="text-3xl">
					<Projects />
				</div>
				<div id="contact" className="text-3xl">
					<Contact />
				</div>
				<div>
					<Footer />
				</div>
			</div>
		</div>
	);
}

export default App;
