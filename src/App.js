
import './App.css';
import { useContext } from 'react'
import { ThemeContext } from './context/them'
import Header from './component/Header/Header.js'
import About from './component/About/About.js';

import Skills from './component/Skills/Skills.js';
import Projects from './component/Projects/Projects.js';
import Certificate from './component/Certificates/Certificate.js';
import Contact from './component/Contact/Contact.js';
import ScrollToTop from './component/ScrollToTop/ScrollToTop.js';

const App = () => {
  const [{ themeName }] = useContext(ThemeContext)

  return (
    <div id='top' className={`${themeName} app`}>
      <Header />
      <main>
        <About />
        <Projects/>
        <Skills />
        <Certificate/>
        <Contact/>
      </main>
      
      <ScrollToTop/>
    </div>
  )
}

export default App;
