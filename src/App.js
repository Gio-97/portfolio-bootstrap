import logo from './logo.svg';
import './App.css';
import Hero from './Hero';
import AboutMe from './AboutMe';
import Tech from './Tech';
import Projects from './Projects';
import Contact from './Contact';
import Navigation from './Navigation';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Navigation/>
        {/* <img src={logo} className="App-logo" alt="logo" /> */}
        <img src='./IMG_1891.jpg' className='Hero-pic'/>
        <Hero/>
      </header>
      <AboutMe/>
      <Tech />
      <Projects/>
      <Contact/>
      
    </div>
  );
}

export default App;
