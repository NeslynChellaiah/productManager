import './App.css'
import './index.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Contact from './Pages/Contact';
import Products from './Pages/Products';
import Header from './components/Header';
import Home from './Pages/Home';

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Signup from './Pages/Signup';


function App() {

  return (
    <section className='d-flex flex-column vh-100'>
     <Router>
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/contact' element={<Contact/>}></Route>
        <Route path='/products' element={<Products/>}></Route>
        <Route path='/register' element={<Signup/>}></Route>
      </Routes>
     </Router>
     <ToastContainer position='top-right' autoClose={3000} />
    </section>
  )
}

export default App
