import React from "react";
import "./styles/tailwind.css";
import Intro from "./components/Intro";
import Projects from "./components/Portfolio";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import About from "./components/About";
import backgroundImage from "./assets/GradientBackground.jpeg";

function App() {
	return (
		<div className="relative min-h-screen text-textColor bg-bgColor">
			{/* Background Image */}
			<div
				className="fixed top-0 left-0 w-full h-full bg-cover bg-center"
				style={{
					backgroundImage: `url(${backgroundImage})`,
				}}
			></div>

			{/* Content */}
			<div className="relative z-10 p-4 space-y-16">
				{/* Intro Section */}
				<div id="intro" className="text-3xl font-headline">
					<Intro />
				</div>

				{/* About Section */}
				<div id="about" className="text-3xl font-headline">
					<About />
				</div>

				{/* Projects Section */}
				<div id="projects" className="text-3xl font-headline">
					<Projects />
				</div>

				{/* Contact Section */}
				<div id="contact" className="text-3xl font-headline">
					<Contact />
				</div>

				{/* Footer */}
				<Footer />
			</div>
		</div>
	);
}

export default App;
