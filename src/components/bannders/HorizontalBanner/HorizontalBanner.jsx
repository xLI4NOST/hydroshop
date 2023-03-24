import classes from './HorizontalBanner.module.sass'
import BlueButton from "../../UI/BlueButton/BlueButton";
import  cfmoto from "../../../images/png/CFMOTO-X6-EPS_blue 1.png"
import  cf from "../../../images/png/2018-Maverick-X3-X-rc-TURBO-R-Carbon-Black-and-Octane-Blue_3-4-front4072 2.png"

const HorizontalBanner = () => {

    return (
    <div className={classes.horizontalBanner}>
        <img src={cfmoto} />
        <img src={cf}/>
        <h2>CКИДКИ <br/>на все запчасти до 70%</h2>
        <BlueButton>ПОСМОТРЕТЬ ВСЕ</BlueButton>

    </div>
    )

}

export default HorizontalBanner