import { useState } from "react";
import Hero from "./components/Hero"
import Navbar from "./components/Navbar"
import Home from "./pages/Home"

function App() {
  const [language, setLanguage] = useState('EN');

  return (
    <>
     <Navbar language={language} />
     <Home language={language} setLanguage={setLanguage} />
    </>
  )
}

export default App
