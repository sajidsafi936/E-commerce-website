import Header from "./components/Header";
import Navbar from "./components/Navbar";
import MainUpper from "./components/MainUpper";
import HomeDeals from "./components/HomeDealsSection";
import QuoteRequest from "./components/QuoteRequestSection";
import "./App.css";
import Recommended from "./components/RecommendedSection.jsx";


function App(){
  return(
    <div>
         <Header/>
          <Navbar/>
          <MainUpper/>
          <HomeDeals/>
          <QuoteRequest/>
          <Recommended/>
    </div>
  );
}
export default App;