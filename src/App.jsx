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
	  <div className="bg-gradient-to-b from-[#FBFAF5] to-[#f0ebe6] min-h-screen">
		<Navbar />
		
		{/* Main layout with sidebars */}
		<div className="flex">
		  {/* Left Sidebar (empty) */}
		  <div className="hidden md:block w-1/6"></div>
  
		  {/* Main Content */}
		  <div className="flex-grow p-4">
			<div id="intro">
			  <Intro />
			</div>
			<div id="about">
			  <About />
			</div>
			<div id="Projects">
			  <Projects />
			</div>
			<div id="contact">
			  <Contact />
			</div>
		  </div>
  
		  {/* Right Sidebar (empty) */}
		  <div className="hidden md:block w-1/6"></div>
		</div>
  
		<Footer />
	  </div>
	);
  }

export default App;
