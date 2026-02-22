import MainUpper from "../components/MainUpper";
import HomeDeals from "../components/HomeDealsSection";
import QuoteRequest from "../components/QuoteRequestSection";
import Recommended from "../components/RecommendedSection";
import ExtraServices from "../components/ExtraServices";
import Supplier from "../components/SupplierRegion";
import NewsLetter from "../components/NewsLetter";

function Home(){
    return(
        <>
        <MainUpper/>
          <HomeDeals/>
          <QuoteRequest/>
          <Recommended/>
          <ExtraServices/>
          <Supplier/>
          <NewsLetter/>
        
        
        
        
        </>
    );
}

export default Home