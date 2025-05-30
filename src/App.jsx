import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './Pages/Home/Home';
import Contact from './Pages/Contact/Contact';
import Products from './Pages/Products/Products';
import Header from './components/Header';


function App() {

  return (
    <section className='d-flex flex-column vh-100'>
     <Header></Header>
     <Router>
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/contact' element={<Contact/>}></Route>
        <Route path='/products' element={<Products/>}></Route>
      </Routes>
     </Router>
    </section>
  )
}

export default App
