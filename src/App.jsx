import Navbar from "./components/Navbar/Navbar"
import { BrowserRouter , Routes, Route } from "react-router-dom"
import Shop from "./pages/Shop"
import ShopCategory from "./pages/ShopCategory"
import Product from "./pages/Product"
import Cart from "./pages/Cart"
import Login from "./pages/Login"









const App = () => {
  return (
    <div>
    <BrowserRouter>
    <Navbar></Navbar>
    <Routes>
      <Route path="/" element={<Shop/>} />
      <Route path="/mens" element={<ShopCategory category="men" />}/>
      <Route path="/women" element={<ShopCategory category="women" />}/>
      <Route path="/kids" element={<ShopCategory category="kids" />}/>
      <Route path="/product" element={<Product/>}>
        <Route path=":productId" element={<Product/>}/>
      </Route>
      <Route path="/cart" element={<Cart/>}></Route>
      <Route path="/login" element={<Login/>}></Route>

      
    </Routes>


    </BrowserRouter>
    
    </div>
  )
}

export default App