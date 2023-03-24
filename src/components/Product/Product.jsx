import classes from './Product.module.sass'
const Product = ({name,image}) => {

    return (
        <div className={classes.product}>
            <div className={classes.productInfo}>
            <h2>{name}</h2>
                <p>Подроббнее ></p>
            </div>
            <img src={image} alt="Квадроцикл"/>

        </div>
    )

}

export default Product