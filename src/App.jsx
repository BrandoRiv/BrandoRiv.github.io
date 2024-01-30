import { useState } from "react";
import "./styles/tailwind.css";
import Intro from "./components/Intro";
import Timeline from "./components/Timeline";
import Portfolio from "./components/Portfolio";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import About from "./components/About";

function App() {
	const [count, setCount] = useState(0);

	return (
		<div className="bg-gradient-to-b from-[#FBFAF5] to-[#f0ebe6]">
			<Navbar />
			<div id="intro">
				<Intro />
			</div>
			<div id="about">
				<About />
			</div>
			<div id="portfolio">
				<Portfolio />
			</div>
			<div id="contact">
				<Contact />
			</div>
			<Footer />
		</div>
	);
}

export default App;
