import React, { useState,useRef,useEffect } from 'react';
import './App.css';
import Navbar from "./components/Navbar";
import Jumbotron from "./components/Jumbotron";
import About from './components/About';
import Resume from './components/Resume/Resume';
import Portfolio from './components/Portfolio/Portfolio';
import Footer from './components/Footer';
import AOS from 'aos'
import 'aos/dist/aos.css'

function App() {
  useEffect(() => {
    AOS.init();
  })
  const [darkMode, setDarkMode] = useState(false);
  const homeRef = useRef(1);
  const aboutRef = useRef(2);
  const portfolioRef = useRef(2);
  const resumeRef = useRef(3);
  const contactRef = useRef(4);

  const aboutScroll = () => aboutRef.current.scrollIntoView(); // run this function from an event handler or pass it to useEffect to execute scroll
  const homeScroll = () => homeRef.current.scrollIntoView();
  const resumeScroll = () => resumeRef.current.scrollIntoView();
  const portfolioScroll = () => portfolioRef.current.scrollIntoView();
  const contactScroll = () => contactRef.current.scrollIntoView();

  // useMountEffect(executeScroll); // Scroll on mount

  function toggleDarkMode () {
    setDarkMode (!darkMode)
    changeDarkMode()
  }

  function changeDarkMode() {//adds the dark class to the html tag (required for the dark-mode styling to work in tailwind)
    const root = document.documentElement
    root.classList.toggle('dark')
  }


  return (
    <div className="App">
      <div className="bg-whitish-green md:bg-whitish-blue dark:bg-brownish-purple relative text-dark-green md:text-dark-blue dark:text-gray-300 font-montserrat">
        <Navbar darkMode={darkMode} toggleDarkMode={toggleDarkMode}  aboutScroll={aboutScroll} homeScroll={homeScroll} resumeScroll = {resumeScroll} portfolioScroll={portfolioScroll} contactScroll={contactScroll} />
        <Jumbotron darkMode={darkMode} homeRefProp={homeRef} />
        <About darkMode={darkMode} refProp={aboutRef} />
        <Resume resumeRefProp={resumeRef} />
        <Portfolio portfolioRefProp={portfolioRef} />
        <Footer contactRefProp={contactRef} />
      </div>
    </div>
  );
}

export default App;
