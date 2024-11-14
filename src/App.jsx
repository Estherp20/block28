
import { Routes, Route, Link } from "react-router-dom";
import Blue from './Pages/Blue';
import Red from './Pages/Red';
import Home from './Pages/Home'
import Pink from './Pages/Pink'
import Navbar from './Pages/Navbar'
import Green from './Pages/Green'
// import './App.css'

function App() {

  return (
    <>
       <div id="container">
      <div id="main-section">
        <Routes>
          <Route path="/blue" element={<Blue />} />
          <Route path="/red" element={<Red />} />
          <Route path="/" element={<Home />} />
          <Route path="/pink" element={<Pink />} />
          <Route path="/green" element={<Green />} />
          {/* <Route path="/Navbar" element={<Navbar />} /> */}
          
        </Routes>
        </div>
  
    </div>
    <footer>
        <Navbar />
    </footer>
    </>
  );
}

export default App
