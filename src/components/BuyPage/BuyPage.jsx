import classes from './BuyPage.module.sass'
import {objectValue} from "../../assets/test/Tests";
import BlueButton from "../UI/BlueButton/BlueButton";
import hurt from "../../images/svg/Hurt.svg"
import grup from "../../images/svg/Group.svg"
import star from "../../images/svg/Star.svg"
import RecomendProduct from "../RecomendProduct/RecomendProduct";
import {useParams} from "react-router-dom";
import {useEffect, useState} from "react";
import axios from "axios";
import ShopsBlock from "../ShopsBlock/ShopsBlock";
import {useDispatch, useSelector} from "react-redux";
import {productsData} from "../../redux/productsReducer";

const BuyPage = () => {
    const [product, setProduct] = useState({})
    const [image, setImage] = useState()
    const [markets, setMarkets] = useState([])
    const params = useParams()

    useEffect(() => {
        axios.get(`http://localhost:1337/api/products?filters[uid]=${params.id}&populate=*`)
            .then(res => {
                    const array = res.data.data
                    array.forEach(elem => {
                        setProduct(elem.attributes)
                        setImage(elem.attributes.img.data.attributes.url)
                    })
                }
            )
            axios.get ('http://localhost:1337/api/markets?populate=*')
                .then(res=>setMarkets(res.data.data))
    }, [params])

    console.log(markets)

    return (
        <div className={classes.buyPage}>
            <div className={classes.flex}>
                <div className={classes.product}>
                    {product.sale&&<BlueButton>SALE</BlueButton>}

                    <img src={`http://localhost:1337${image}`} alt={objectValue.name}/>
                    <div className={classes.priceBlock}>
                        <p>{product.oldprice} ₽</p>
                        <h2>{product.price} ₽</h2>
                    </div>
                    <p>Нашли дешевле? Снизим цену!</p>
                </div>
                <div className={classes.infoBlock}>
                    <h2>{product.title}</h2>
                    <p>Код товара: {params.id}</p>
                    <div className={classes.imgBlock}>
                        <img src={hurt}/>
                        <img src={grup}/>
                        <img src={star}/>
                    </div>
                    <div className={classes.characteristic}>
                        <h2>Характеристики</h2>
                        <div className={classes.info}>
                            <h2>Производитель</h2>
                            <h2>{product.country}</h2>
                        </div>
                        <div className={classes.info}>
                            <h2>Количество мест, шт: </h2>
                            <h2>{product.places}</h2>
                        </div>
                        <div className={classes.info}>
                            <h2>Мощность, л.с.</h2>
                            <h2>{product.power}</h2>
                        </div>
                        <div className={classes.info}>
                            <h2>Тип двигателя</h2>
                            <h2>{product.engineType}</h2>
                        </div>
                        <div className={classes.info}>
                            <h2>Год выпуска</h2>
                            <h2>{product.year}</h2>
                        </div>
                        <BlueButton>КУПИТЬ</BlueButton>
                    </div>
                </div>
            </div>
            <ShopsBlock productId={params.id} markets={markets}/>
            <RecomendProduct text={'С этим товаром покупают'} defaultView={'Электроника'}/>
        </div>
    )

}

export default BuyPage