import './App.css';
import { Routes, Route, Link } from "react-router-dom";
import Home from './Components/Js/Home/Home';
import Services from './Components/Js/Services';
import Header from './Components/Js/Shared/Header';
import Footer from './Components/Js/Shared/Footer';
import Checkout from './Components/Js/Protected/Checkout';
import Login from './Components/Js/Login';
import Signup from './Components/Js/Signup';
import RequireAuth from './Components/Js/RequireAuth';
import NotFound from './Components/Js/NotFound';
import Blogs from './Components/Js/Blogs';
import About from './Components/Js/About';
function App() {
  return (
    <div className="App">
      <Header></Header>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/home" element={<Home></Home>}></Route>
        <Route path="/about" element={<About/>}></Route>
        <Route path="/services" element={<Services></Services>}></Route>
        <Route path='/checkout' element={
          <RequireAuth><Checkout></Checkout></RequireAuth>
        }></Route>
        <Route path="/blogs" element={<Blogs/>}></Route>
        <Route path="/login" element={<Login></Login>}></Route>
        <Route path="/signup" element={<Signup></Signup>}></Route>
        <Route path='*' element={<NotFound></NotFound>}></Route>
        <Route element={<NotFound></NotFound>}></Route>
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
