import { useState } from "react";
import "./styles/tailwind.css";
import Intro from "./components/Intro";
import Timeline from "./components/Timeline";
import Portfolio from "./components/Portfolio";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";

function App() {
	const [count, setCount] = useState(0);

	return (
		<div>
			<>
				<Navbar />
				<Intro />
				<Portfolio />
				<Contact />
				<Footer />
			</>
		</div>
	);
}

export default App;
