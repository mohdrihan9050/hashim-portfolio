import Navbar from './components/Navbar/Navbar'
import About from './components/About/About'
import Service from './components/Services/Service'
import Work from './components/work/Work'
import Footer from './components/Footer/Footer'
import Contact from './components/Contact me/Contact'
import Skill from './components/Skill/Skill'
import Intro from './components/Intro/Intro'

import './App.css'

function App() {

  return (
    <div className="App">
    <Navbar/>
    <About/>
    <Intro/>
    <Service/>
    <Work/>
    <Skill/>
    <Contact/>
    <Footer/>
    </div>
  )
}

export default App
