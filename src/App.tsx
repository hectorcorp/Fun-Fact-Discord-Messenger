import {Routes, Route} from "react-router-dom";
import Navbar from './components/Navbar';
import Home from './pages/Home';
import About from './pages/About';
import Guide from './pages/Guide';
import Messenger from "./pages/Messenger";


const App = () => {
  return (
    <div className="w-full h-screen">
      <Navbar/>
      <main>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/about" element={<About/>}/>
          <Route path="/guide" element={<Guide/>}/>
          <Route path="/messenger" element={<Messenger/>}/>
        </Routes>
      </main>
    </div>
  );
};

export default App;
