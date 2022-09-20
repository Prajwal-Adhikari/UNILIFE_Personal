import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from "./pages/Home";
import Product from "./pages/Product";
import Register from "./pages/Register";
import Login from "./pages/Login";
// import ProductList from "./pages/ProductList";
import Cart from "./pages/Cart";
// import Products from "./components/Products";
import Navbar from "./components/Navbar"

const App = () => {

  return (
    <BrowserRouter>
    <Navbar/>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/login' element={<Login/>}/>
      <Route path='/register' element={<Register/>}/>
      <Route path='/product' element={<Product/>}/>
      <Route path='/cart' element={<Cart/>}/>
    </Routes>

    </BrowserRouter>
    
  );
}


export default App;