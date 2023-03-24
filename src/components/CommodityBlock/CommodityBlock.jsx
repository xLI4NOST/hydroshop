import classes from './CommodityBlock.module.sass'
import RecomendCard from "../RecomendProduct/RecomendCard/RecomendCard";
import {Link} from "react-router-dom";
import axios from "axios";
import {useEffect, useState} from "react";

const CommodityBlock = () => {

    const [card, setCard]= useState(null)
const selectCard =(item)=>{
        setCard(item)
}
    useEffect(() => {
        axios.get('http://localhost:1337/api/products?populate=*')
            .then(res => setShops(res.data.data))
    }, [])

    const [shops, setShops] = useState([])

    return (
        <div onClick={selectCard} className={classes.CommodityBlock}>
            {shops.map(res =>
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