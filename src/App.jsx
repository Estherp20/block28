
import { Routes, Route, Link } from "react-router-dom";
import Blue from './Pages/Blue';
import Red from './Pages/Red';
import Home from './Pages/Home'
import Navbar from './Pages/Navbar'
// import './App.css'

function App() {

  return (
    <>
       <div id="container">
        
       <div id="navbar">
        <Link to="/home">Home</Link>
        <Link to="/blue">Blue</Link>
        <Link to="/red">Red</Link>
      </div>
     

      <div id="main-section">
        <Routes>
          <Route path="/blue" element={<Blue />} />
          <Route path="/red" element={<Red />} />
          <Route path="/home" element={<Home />} />
          <Route path="/Navbar" element={<Navbar />} />
        </Routes>
        </div>

    </div>
    </>
  );
}

export default App
