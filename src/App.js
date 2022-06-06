import Steps from "./Components/Steps/Steps";
import Home from "./Components/Home/Home";
import Intro from "./Components/Intro/Intro"
import { BrowserRouter, Routes, Route} from 'react-router-dom';
import './App.css';
import Assesment from "./Components/assesment/Assesment";
import Goodluck from './Components/Goodluck/Goodluck';
import Requirement from './Components/Requirements/Requirement';
import Purpose from "./Components/Purpose/Purpose"
import About from "./Components/About/About";



function App() {

  return (
    <div className="App">

        <BrowserRouter>
                    <Routes>
                        <Route path="/" element={ <Home />} />
                        <Route path="/Intro" element={ <Intro />}/>
                        <Route path="/About" element={ <About />}/>
                        <Route path="/Purpose" element={ <Purpose  />}/>
                        <Route path="/Steps" element={ <Steps  />}/>
                        <Route path="/Assesment" element={ <Assesment />} />
                        <Route path="/Requirement" element={ <Requirement />} />
                        <Route path="/Goodluck" element={ <Goodluck />} /> 
                    </Routes>      
          </BrowserRouter>
    </div>
  );
}

export default App;
