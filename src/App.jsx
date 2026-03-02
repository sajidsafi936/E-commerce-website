import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import "./App.css";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import ProductListingPage from "./pages/ProductListingPage";
import ClothesPage from "./pages/ClothesPage";
import MyCartPage from "./pages/MyCartPage";


function App(){
  return(
    <div>
         <Header/>
          <Navbar/>
          <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/product-listing" element={<ProductListingPage/>} />
        <Route path="/clothes-and-wear" element={<ClothesPage/>} />
        <Route path="/cart" element={<MyCartPage/>} />
      </Routes>
          <Footer/>
    </div>
  );
}
export default App;