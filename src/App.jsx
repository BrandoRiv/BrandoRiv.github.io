import React from "react";
import "./styles/tailwind.css";
import Intro from "./components/Intro";
import Projects from "./components/Portfolio";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import About from "./components/About";
import backgroundImage from "./assets/GradientBackground.jpeg"; // Import the background image

function App() {
	return (
		<div className="relative min-h-screen text-white">
			<div
				className="fixed top-0 left-0 w-full h-full bg-cover bg-center"
				style={{
					backgroundImage: `url(${backgroundImage})`,
				}}
			></div>
			<div className="relative z-10 p-4 space-y-16">
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
