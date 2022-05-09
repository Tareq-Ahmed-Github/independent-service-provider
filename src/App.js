import './App.css';
import { Routes, Route, Link } from "react-router-dom";
import Home from './Components/Js/Home/Home';
import Services from './Components/Js/Services';
import Header from './Components/Js/Shared/Header';
import Footer from './Components/Js/Shared/Footer';
import Checkout from './Components/Js/Protected/Checkout';
import Login from './Components/Js/Login';
import Signup from './Components/Js/Signup';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/home" element={<Home></Home>}></Route>
        <Route path="/services" element={<Services></Services>}></Route>
        <Route path="/checkout" element={<Checkout/>}></Route>
        <Route path="/login" element={<Login></Login>}></Route>
        <Route path="/signup" element={<Signup></Signup>}></Route>
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
