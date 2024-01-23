import { useState } from "react";
import "./styles/tailwind.css";
import "./styles/custom.css";
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
		<div>
			<Navbar />
			<div id="home">
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
