
import './App.css';
import Particles from 'react-tsparticles';
import {loadFull} from 'tsparticles'
import perticles from './Utilities/perticles';
import Home from './Components/Home/Home';

function App() {
  const handleInit = async(main)=>{
    await loadFull(main)
  }
  return (
    <div className="App">
      <Particles id='perticles' options={perticles} init={handleInit}/>
      <Home/>
    </div>
  );
}

export default App;
