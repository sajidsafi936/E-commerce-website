import Header from "./components/Header";
import Navbar from "./components/Navbar";
import MainUpper from "./components/MainUpper";
import HomeDeals from "./components/HomeDealsSection";
import QuoteRequest from "./components/QuoteRequestSection";
import "./App.css";


function App(){
  return(
    <div>
         <Header/>
          <Navbar/>
          <MainUpper/>
          <HomeDeals/>
          <QuoteRequest/>
    </div>
  );
}
export default App;