import classes from './Shop.module.sass'
import {objectValue} from "../../assets/test/Tests";
import BlueButton from "../UI/BlueButton/BlueButton";

const Shop = ({name, workTime, res}) => {
    return (
        <div className={classes.shop}>
            <h2>{name}</h2>
            <h2>{workTime}</h2>
            <h2>{objectValue.quantityUg >= 1 ? 'В наличии' : 'Нет в наличии'}</h2>
            <h2>{objectValue.quantityUg || 0}</h2>
            <BlueButton>КУПИТЬ</BlueButton>
        </div>
    )

}

export default Shop