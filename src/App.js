
import './App.css';
import Particles from 'react-tsparticles';
import {loadFull} from 'tsparticles'
import perticles from './Utilities/perticles';
import Home from './Components/Home/Home';
import Projects from './Components/Projects/Projects';
import Contact from './Components/Contact/Contact';
import Footer from './Components/Footer/Footer';
import NavBar from './Components/Navbar/NavBar';
import { Toaster } from 'react-hot-toast';
import About from './Components/About/About';
import Skills from './Components/Skills/Skills';

function App() {
  const handleInit = async(main)=>{
    await loadFull(main)
  }
  return (
    <div className="App bg-slate-900">
      <Toaster/>
      <Particles id='perticles' options={perticles} init={handleInit}/>
      <div className='max-w-7xl mx-auto'>
      <Home/>
      <About/>
      <Projects/>
      <Skills/>
      <Contact/>
      </div>
      
      <Footer/>
    </div>
  );
}

export default App;
