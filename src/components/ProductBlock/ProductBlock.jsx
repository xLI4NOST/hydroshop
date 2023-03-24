import classes from './ProductBlock.module.sass'
import Product from "../Product/Product";
const products = [

    {name:'Квадроциклы',
        image: 'https://atvarmor.ru/wp-content/uploads/2020/10/rm-800-duo-1.png',
        id:231321
    },
    {name:'Гидроциклы',
        image: 'https://www.major-motor.ru/images/models/model_big/SEA-MY22-WAKE-PRO-SS-230-Neo-Mint-SKU00013NC00-Studio-34FR-NA-500.png',
        id:232321213
    },
    {name:'Катера',
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSca1nyl-gRxYprW50aJWmi2z8dqlcCnkEJ1Q&usqp=CAU',
        id:23232
    },
    {name:'Снегоходы',
        image: 'https://24atv.net/image/cache/catalog/stories/product/tekhnika/snegokhody/stels/kapitan-s150/stels-s150-kapitan_001-1500x1000.jpg',
        id:23232323232
    },
    {name:'Вездеходы',
        image: 'https://i.ytimg.com/vi/QBSVquCdalM/maxresdefault.jpg',
        id:1111111
    },
    {name:'Двигатели',
        image: 'https://st3.zr.ru/_ah/img/h9kqQ3fdEAKMK9QZZ3OVBw=s800',
        id:121232131313
    },

]
const ProductBlock = () => {

    return (
        <div className={classes.productBlock}>
            {products.map(product=>
                <Product name={product.name} image={product.image} key={product.id} />
            )}
        </div>

    )

}

export default ProductBlock