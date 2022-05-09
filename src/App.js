import './App.css';
import { Routes, Route, Link } from "react-router-dom";
import Home from './Components/Js/Home/Home';
import Services from './Components/Js/Services';
import Header from './Components/Js/Shared/Header';
import Footer from './Components/Js/Shared/Footer';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/services" element={<Services></Services>}></Route>
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
