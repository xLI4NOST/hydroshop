import {Wrapper} from "./components/layout/Wrapper";
import MainPage from "./pages/MainPage/MainPage";
import Slider from "./components/Slider/Slider";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import {Route, Routes} from "react-router-dom";
import SalePage from "./pages/SalePage/SalePage";
import BuyPage from "./components/BuyPage/BuyPage";
import {Provider} from "react-redux";


function App() {
  return (
    <div className="App">
            <Wrapper>
                <Header/>
                     <Routes>
                         <Route path='/' element={<MainPage/>}/>
                         <Route path='/salePage/:category' element={<SalePage/>}/>
                         <Route path='product/:id' element={<BuyPage/>}/>
                     </Routes>
            </Wrapper>
            <Footer/>
    </div>
  );
}

export default App;
