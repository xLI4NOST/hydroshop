import classes from './RecomendProduct.module.sass'
import {useEffect, useState} from "react";
import {Swiper, SwiperSlide} from "swiper/react";
import {Navigation} from "swiper";
import gmg from "../../images/png/CFMOTO-X6-EPS_blue 1.png"
import ddd from "../../images/png/motor.png"
import eee from "../../images/png/rukzak.png"
import ww from "../../images/png/banner.png"
import RecomendCard from "./RecomendCard/RecomendCard";
import {fetchRecomendProductsData} from "../../redux/recomendproductsReduccer";
import {useDispatch, useSelector} from "react-redux";

const RecomendProduct = ({text, defaultView, hideButton}) => {
const [button, setButton] = useState(defaultView)
    const dispatch = useDispatch()
    const drop = "local"
useEffect(()=>{
    dispatch(fetchRecomendProductsData(drop))
}, [])
    const recomendProducts = useSelector((state)=>state.recomendProducts.recomendProducts)


    const handleClickButton =(name)=>{
        switch (name){
            case 'Запчасти': setButton(name)

            case 'Шины': setButton(name)

            case 'Моторы': setButton(name)

            case 'Электроника': setButton(name)

            case 'Инструменты' : setButton(name)


            case 'Аксессуары' : setButton(name)
            default:
                break

        }

    }
    return (
    <div className={classes.RecomendProduct}>
        <h2>{text}</h2>
        <div className={classes.buttonBlock}>
            <button onClick={()=>handleClickButton("Запчасти")} className={button==="Запчасти" && classes.active}>Запчасти</button>
            <button onClick={()=>handleClickButton("Шины")} className={button==="Шины" && classes.active}>Шины</button>
            <button onClick={()=>handleClickButton("Моторы")} className={button==="Моторы" && classes.active}>Моторы</button>
            <button onClick={()=>handleClickButton("Электроника")} className={button==="Электроника" && classes.active}>Электроника</button>
            <button onClick={()=>handleClickButton("Инструменты")} className={button==="Инструменты" && classes.active}>Инструменты</button>
            <button onClick={()=>handleClickButton("Аксессуары")} className={button==="Аксессуары" && classes.active}>Аксессуары</button>
        </div>
        <Swiper
            slidesPerView={4}
            spaceBetween={25}
            navigation={true}
            modules={[Navigation]}
            style={{
                'margin':'25px 0 0 0',
                '--swiper-navigation-color': '#2F3035',
                '--swiper-navigation-sides-offset': '5px'
            }}

        >

            {recomendProducts.map((item)=>
                <SwiperSlide  key={item.attributes.uid}><RecomendCard text={item.attributes.name} image={item.attributes.image.data.attributes.url}/></SwiperSlide>
            )}

        </Swiper>
       {hideButton && <button className={classes.bottom}>Показать еще</button>}

    </div>
    )

}

export default RecomendProduct