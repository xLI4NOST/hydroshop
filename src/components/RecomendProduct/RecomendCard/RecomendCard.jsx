import classes from './RecomendCard.module.sass'
import picture from '../../../images/png/rukzak.png'
import hurt from    '../../../images/svg/Hurt.svg'
import whiteStroller from '../../../images/svg/whiteStroller.svg'
import BlueButton from "../../UI/BlueButton/BlueButton";
import {useEffect, useState} from "react";

const RecomendCard = ({text, hideButton, image, price}) => {
    const [sale, isSale] = useState(false)
    useEffect(()=>{
        isSale(hideButton)
    })
    return (

    <div className={classes.recomendCard}>
        {sale && <BlueButton>SALE</BlueButton>}
        <h2 className={classes.watchButton}>посмотреть товар</h2>
        <img className={classes.likeButton} src={hurt}/>
        <img className={classes.mainPicture} src={`http://localhost:1337${image}` }/>
        <h2 className={classes.title}>{text}</h2>
            <p>{price || 9800} </p>
        <button className={classes.buyButton}><img src={whiteStroller}/></button>
    </div>
    )

}

export default RecomendCard