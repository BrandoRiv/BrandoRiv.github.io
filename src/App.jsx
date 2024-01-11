import { useState } from 'react'
import './styles/tailwind.css'
import Intro from './components/Intro'
import Timeline from './components/Timeline'
import Portfolio from './components/Portfolio'
import Contact from './components/Contact'
import Footer from './components/Footer' 

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Intro />
      <Timeline />
      <Portfolio />
      <Contact />
      <Footer />

    </>
  )
}

export default App
