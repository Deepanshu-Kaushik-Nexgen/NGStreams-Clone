import Navbar from './components/Navbar'
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
      </BrowserRouter>
    </div>
  );
}

export default App;
