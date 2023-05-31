import classes from './CommodityBlock.module.sass'
import RecomendCard from "../RecomendProduct/RecomendCard/RecomendCard";
import {Link, useParams} from "react-router-dom";
import {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {fetchProductsData, productsData} from "../../redux/productsReducer";

const CommodityBlock = () => {

    const [card, setCard] = useState(null)
    const selectCard = (item) => {
        setCard(item)
    }


    const products = useSelector((state) => state.products.products)
    const pageInfo = useSelector(state => state.products.products.meta)
    console.log(pageInfo)

    
    return (
        <div onClick={selectCard} className={classes.CommodityBlock}>
            {products.data && products.data.map(res =>
                <Link to={`/product/${res.attributes.uid}`} key={res.attributes.uid} className={classes.link}>
                    <RecomendCard
                        key={res.attributes.uid}
                        text={res.attributes.title}
                        hideButton={res.attributes.sale}
                        image={res.attributes.img.data.attributes.url}
                        price={res.attributes.price}/></Link>
            )}
        </div>


    )

}

export default CommodityBlock