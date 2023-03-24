import classes from './ShopsBlock.module.sass'
import Shop from "../Shop/Shop";

const ShopsBlock = ({productId, markets}) => {


    return (
        <div className={classes.shopsBlock}>
            <div className={classes.shopsHeader}>
                <a href="#">О товаре</a>
                <a href="#">Характеристики</a>
                <a href="#">Отзывы</a>
                <a className={classes.active} href="#">Самовывоз</a>
                <a href="#">Доставка</a>
                <a href="#">Сервис</a>
                <a href="#">Гарантия</a>
            </div>
            <div className={classes.shopsInfo}>
                <form>
                    <h2>Магазин</h2> <input type='text'/>
                </form>
                <div className={classes.shops}>
                    <div className={classes.caption}>
                        <h2>Адрес</h2>
                        <h2>Режим работы</h2>
                        <h2>Доступно</h2>
                        <h2>Количество</h2>
                    </div>
                    {markets.map(res=><Shop key={res.attributes.uid} res={res.attributes} name={res.attributes.marketName} workTime={res.attributes.workTime}/>)}

                < /div>
            </div>
        </div>
    )

}

export default ShopsBlock