import { BrowserRouter, Routes, Route, } from "react-router-dom";
import Nav from "./components/Nav";
import Home from "./components/Home";
import Product from "./components/Product";
import Cart from "./components/Cart";
import Categories from "./components/Categories";

const App = () => {
  return (
    <BrowserRouter>
      <Nav />
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/cart" element={<Cart/>}/>
        <Route path="/products/:productId" element={<Product/>}/>
        <Route path="/categories/:category" element={<Categories/>}></Route>
      </Routes>
    </BrowserRouter >
  );
}

export default App;
