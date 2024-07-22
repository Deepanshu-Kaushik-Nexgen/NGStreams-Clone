import Navbar from './components/Navbar'
import Footer from './components/Footer'
import './App.css';
import Home from './Views/Home/index'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Products from './Views/Products';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/products' element={<Products />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
