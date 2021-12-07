
import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from './component/Header.js';
import Home from './component/Home.js';
import Menu from './component/Menu.js';
import Fooditem from './component/Fooditem.js';
import Thanku from './component/Thanku.js';
import Login from './component/Login.js';
import Footer from './component/Footer.js';


function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Routes>
          <Route path="/menu" element={<Menu />} />

          <Route path="/fooditem" element={<Fooditem />} />

          <Route path="/login" element={<Login />} />

          <Route path="/thanku" element={<Thanku />} />

          <Route exact path="/" element={<Home />} />
        </Routes>
        < Footer />
      </Router>
    </div>
  );
}

export default App;
