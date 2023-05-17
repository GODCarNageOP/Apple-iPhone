import React from "react"
import Jumbotron from "./components/Jumbotron"
import SoundSection from "./components/SoundSection"
import DisplaySection from "./components/DisplaySection"
import WebgiViewer from "./components/WebgiViewer"
import Nav from "./components/Navbar"

function App() {
 

  return (
    <div className="App">
       <Nav/>
      <Jumbotron/>
      <SoundSection/>
      <DisplaySection/>
      <WebgiViewer/>
    </div>
   
  )
}

export default App
