// import './App.css';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Header, Footer} from "./components/index"
import { Home, Contact, Login, Register, About, Products, NewProducts, Reset, PopularProducts, Admin} from "./pages/index"
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import AdminOnlyRoute from "./components/adminOnlyRoute/AdminOnlyRoute";
import ProductDetails from "./components/product/productDetails/ProductDetails";
import Cart from "./pages/cart/Cart";
import Payment from "./pages/payment/Payment";

function App() {
  return (
    <>
      <BrowserRouter>
      <ToastContainer />
        <Header/>
          <Routes>
            <Route path="/" element={ <Home/> }/>
            <Route path="/contact" element={ <Contact/> }/>
            <Route path="/login" element={ <Login/> }/>
            <Route path="/register" element={ <Register/> }/>
            <Route path="/about" element={ <About/> }/>
            <Route path="/products" element={ <Products/> }/>
            <Route path="/newproducts" element={ <NewProducts/> }/>
            <Route path="/popularproducts" element={<PopularProducts/> }/>
            <Route path="/reset" element={ <Reset/> }/>

            <Route path="/admin/*"
             element={<AdminOnlyRoute>
              <Admin/>
              </AdminOnlyRoute>}/>

              <Route path="/product-details/:id" element={ <ProductDetails/> }/>
              <Route path="/cart" element={ <Cart/> }/>
              <Route path="/payment" element={ <Payment/> }/>
          </Routes>
        <Footer/>
      </BrowserRouter>
    </>
  );
}

export default App;
