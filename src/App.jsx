import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './styles/tailwind.css'
import Intro from './components/Intro'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Intro />
    </>
  )
}

export default App
