import Header from "./components/Header";
import Navbar from "./components/Navbar";
import MainUpper from "./components/MainUpper";
import HomeDeals from "./components/HomeDealsSection";
import "./App.css";


function App(){
  return(
    <div>
         <Header/>
          <Navbar/>
          <MainUpper/>
          <HomeDeals/>
    </div>
  );
}
export default App;