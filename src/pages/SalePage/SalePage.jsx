import classes from './SalePage.module.sass'
import CommodityBlock from "../../components/CommodityBlock/CommodityBlock";

const SalePage = ({namePage}) => {

    return (
        <div className={classes.salePage}>
            <div className={classes.saleHeader}>
                <h2>{namePage}</h2>
                <div className={classes.linkBlock}>
                    <a>Полноприводные</a>
                    <a>от 5000</a>
                    <a>BRP</a>
                    <a>еще</a>
                </div>
            </div>
            <div className={classes.mainBlock}>
                <div className={classes.filter}></div>
                <CommodityBlock/>
            </div>
            <div className={classes.pageCounter}>
                <p className={classes.active}>1</p>
                <p>2</p>
                <p>3</p>
                <p>4</p>
                <p>5</p>
            </div>
        </div>
    )

}

export default SalePage