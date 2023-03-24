import classes from './MainPage.module.sass'
import Header from "../../components/Header/Header";
import Slider from "../../components/Slider/Slider";
import Search from "../../components/Search/Search";
import ProductBlock from "../../components/ProductBlock/ProductBlock";
import RecomendProduct from "../../components/RecomendProduct/RecomendProduct";
import HorizontalBanner from "../../components/bannders/HorizontalBanner/HorizontalBanner";

const MainPage = () => {

    return (
        <div className={classes.mainPage}>
            <Slider/>
            <Search/>
            <ProductBlock/>
            <RecomendProduct text={"Популярные товары"} defaultView ={"Запчасти"} hideButton={true}/>
            <HorizontalBanner/>
            <RecomendProduct text={'Рекомендуемые товары'} defaultView={"Электроника"} hideButton={false}/>
        </div>
    )

}

export default MainPage