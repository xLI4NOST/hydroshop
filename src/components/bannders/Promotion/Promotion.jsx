import classes from './Promotion.module.sass'
import BlueButton from "../../UI/BlueButton/BlueButton";
import Price from "../../price/price";
import line from "../../../images/svg/line.svg"
import motor from "../../../images/png/motor.png"
const Promotion = () => {

    return (
<div className={classes.promotion}>
    <div className={classes.headerBlock}>
    <BlueButton>АКЦИЯ</BlueButton>
        <div className={classes.price}>
             <Price>190 000₽</Price>
                <p>225 000₽<img src={line} alt="line"/></p>

         </div>
    </div>
    <div className={classes.bodyBlock}>
        <img src={motor}/>
        <h2>Лодочный мотор Suzuki DF9.9BRS</h2>
    </div>
    <div className={classes.footerBlock}>
            <h2>Акция действует до</h2>
            <p className={classes.time}>31.08.2020</p>
    </div>

</div>

    )

}

export default Promotion