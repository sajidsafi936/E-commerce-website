import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import "./App.css";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import ProductListingPage from "./pages/ProductListingPage";
import ClothesPage from "./pages/ClothesPage";


function App(){
  return(
    <div>
         <Header/>
          <Navbar/>
          <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/productListingPage" element={<ProductListingPage/>} />
        <Route path="/ClothesPages" element={<ClothesPage/>} />
      </Routes>
          <Footer/>
    </div>
  );
}
export default App;