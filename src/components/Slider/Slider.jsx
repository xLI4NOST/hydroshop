import classes from './Slider.module.sass'
import { Pagination, Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import Promotion from "../bannders/Promotion/Promotion";
const photos = [
    'https://snegik.ru/upload/iblock/b91/b91c145a16585a7f061efbea5b791b8c.jpeg',
    'https://snegik.ru/upload/iblock/b91/b91c145a16585a7f061efbea5b791b8c.jpeg'
]
const Slider = () => {

    return (
        <div className={classes.sectionSwiper}>
            <Swiper
                slidesPerView={1}
                spaceBetween={30}
                loop={true}
                pagination={{
                    clickable: true,
                }}
                navigation={true}
                modules={[Pagination, Navigation]}
                style={{
                    'maxWidth': '870px',
                    'maxHeight': '470px',
                    'margin':'0',
                    '--swiper-navigation-color': 'white',
                    '--swiper-pagination-color': 'white',
                    '--swiper-pagination-bullet-inactive-color':'white',
                    '--swiper-pagination-bullet-inactive-border': ''
                }}
            >
                {photos.map((photo, number)=>(
                    <SwiperSlide key={number} ><img className={classes.img}src={photo} alt="hydra"/></SwiperSlide>
                ))}
            </Swiper>
            <Promotion/>
        </div>

    )
}

export default Slider