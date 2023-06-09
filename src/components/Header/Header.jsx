import classes from './Header.module.sass'
import SvgButton from "../UI/svgButton/svgButton";
import hurtSVG from "../../images/svg/Hurt.svg"
import peepleSVG from "../../images/svg/People.svg"
import strollerSVG from "../../images/svg/stroller.svg"
import pointSVG from "../../images/svg/point.svg"
import {useEffect, useState} from "react";
import {Link, useParams} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {fetchProductsData} from "../../redux/productsReducer";

const Header = () => {
    const number = 2
    const dispatch = useDispatch()
    const [isPage, setPage] = useState('hydro')
    useEffect(() => {
        dispatch(fetchProductsData({isPage, number}))
    }, [isPage])


    console.log(isPage)
    const handleChangePage = (str) => {
        switch (str) {
            case 'ships':
                setPage(str)

            case 'hydro':
                setPage(str)

            case 'boats':
                setPage(str)

            case 'rovers':
                setPage(str)

            case 'snowrovers':
                setPage(str)

            case 'engines':
                setPage(str)

            default:
                break
        }

    }




    return (
        <div className={classes.header}>
            <div className={classes.buttonBlock}>
                <div>
                    <a href="#" className={classes.link}>Магазины</a>
                    <a href="#" className={classes.link}>Акции</a>
                    <a href="#" className={classes.link}>Доставка и оплата</a>
                </div>
                <Link to='/' className={classes.href}>
                <svg xmlns="http://www.w3.org/2000/svg" width="80" height="76" fill="none" className={classes.svg}>
                    <path fill="#2F3035"
                          d="M.9 70c-.07 0-.1-.03-.1-.1l.04-13.74c0-.05.03-.08.08-.08l3.74-.02c.73-.01 1.4.16 2 .52a4.03 4.03 0 0 1 2 3.46v5.74A4.13 4.13 0 0 1 6.6 69.4a4.2 4.2 0 0 1-2.12.58L.9 70Zm2.34-2.46h1.24c.5 0 .9-.17 1.24-.52.35-.35.52-.76.52-1.24v-5.76c0-.43-.16-.8-.48-1.1a1.4 1.4 0 0 0-1.1-.46l-1.4.02-.02 9.06ZM10.31 70c-.05 0-.08-.03-.08-.1l.04-13.74c0-.05.03-.08.08-.08h4.04c.72 0 1.38.18 1.98.54a3.93 3.93 0 0 1 .72 6.36c.72.8 1.08 1.74 1.08 2.82l.02 4.1c0 .07-.03.1-.1.1h-2.26c-.05 0-.08-.02-.08-.06V65.8c0-.48-.17-.9-.52-1.24a1.62 1.62 0 0 0-1.24-.54h-1.32l-.02 5.88c0 .07-.02.1-.08.1h-2.26Zm2.36-8.38h1.72c.42 0 .78-.15 1.1-.46.32-.3.48-.68.48-1.12 0-.43-.16-.8-.48-1.1a1.5 1.5 0 0 0-1.1-.46h-1.72v3.14ZM19.98 70c-.06 0-.1-.03-.1-.1l.02-13.74c0-.05.03-.08.08-.08h2.24c.06 0 .08.03.08.08l.02 13.74c0 .07-.02.1-.08.1h-2.26Zm6.34 0c-.05 0-.09-.03-.1-.1l-2.76-13.74c-.01-.05.01-.08.08-.08h2.26c.05 0 .09.03.1.08l1.64 9.16 1.6-9.16c.01-.05.05-.08.1-.08h2.24c.07 0 .1.03.08.08L28.84 69.9c-.01.07-.05.1-.1.1h-2.42Zm6.5 0c-.06 0-.09-.03-.09-.1l.02-13.74c0-.05.03-.08.08-.08h6.42c.06 0 .08.03.08.1v2.24c0 .05-.02.08-.08.08h-4.1v3.12h4.1c.06 0 .08.03.08.08l.02 2.26c0 .05-.02.08-.08.08h-4.12v3.5h4.12c.06 0 .08.03.08.1v2.28c0 .05-.02.08-.08.08h-6.46Zm11.36 0c-.05 0-.08-.03-.08-.1l.04-13.74c0-.05.03-.08.08-.08h2.44c.05 0 .1.03.14.08l1.82 2.64 1.82-2.64c.04-.05.09-.08.14-.08h2.46c.05 0 .08.03.08.08l.04 13.74c0 .07-.03.1-.08.1h-2.26c-.05 0-.08-.03-.08-.1l-.02-10.2-2.1 3.04-2.08-3.04-.02 10.2c0 .07-.03.1-.08.1h-2.26Zm14.36.2c-.72 0-1.38-.18-1.98-.54a4.37 4.37 0 0 1-1.42-1.46 3.92 3.92 0 0 1-.54-2.02l.02-6.34a3.93 3.93 0 0 1 5.88-3.44 4.03 4.03 0 0 1 1.94 3.44l.02 6.34a4.13 4.13 0 0 1-1.96 3.48c-.58.36-1.24.54-1.96.54Zm0-2.42c.4 0 .75-.16 1.04-.48.31-.33.46-.7.46-1.12l-.02-6.34c0-.44-.14-.81-.42-1.12-.28-.3-.63-.46-1.06-.46-.41 0-.76.15-1.06.46-.29.3-.44.67-.44 1.12v6.34c0 .44.15.82.44 1.14.3.3.65.46 1.06.46ZM65.73 70c-.05 0-.08-.03-.08-.1V58.5h-2.6c-.07 0-.1-.03-.1-.1l.02-2.24c0-.05.03-.08.08-.08h7.6c.07 0 .1.03.1.08v2.24c0 .07-.03.1-.08.1h-2.62l.02 11.4c0 .07-.03.1-.08.1h-2.26Zm9.26.2c-.72 0-1.38-.18-1.98-.54a4.37 4.37 0 0 1-1.42-1.46 3.92 3.92 0 0 1-.54-2.02l.02-6.34a3.93 3.93 0 0 1 5.88-3.44 4.03 4.03 0 0 1 1.94 3.44l.02 6.34a4.13 4.13 0 0 1-1.96 3.48c-.59.36-1.24.54-1.96.54Zm0-2.42c.4 0 .74-.16 1.04-.48.3-.33.46-.7.46-1.12l-.02-6.34c0-.44-.14-.81-.42-1.12-.28-.3-.64-.46-1.06-.46-.42 0-.77.15-1.06.46-.3.3-.44.67-.44 1.12v6.34c0 .44.14.82.44 1.14.3.3.64.46 1.06.46ZM59.04 7.96c-.7-.7-1.8-.81-2.63-.25-3.1 2.11-18.63 12.73-20.3 14.4a6.22 6.22 0 0 0 8.78 8.78c1.67-1.67 12.29-17.2 14.4-20.3.56-.83.46-1.93-.25-2.63Zm-17.08 20a2.07 2.07 0 0 1-2.92-2.92c.64-.64 5.06-3.8 10.48-7.56-3.77 5.42-6.92 9.84-7.56 10.48Z"/>
                    <path fill="#2F3035"
                          d="m23.55 36.13-2.56 1.25a22.2 22.2 0 0 1-1.4-18.82l2.93 1.4A2.06 2.06 0 0 0 25.3 19c.5-1.04.06-2.27-.97-2.77l-2.9-1.38A22.39 22.39 0 0 1 38.43 4.24v3.11a2.07 2.07 0 1 0 4.14 0V4.23c2.47.23 4.85.86 7.12 1.88a2.07 2.07 0 0 0 1.7-3.77A26.3 26.3 0 0 0 40.5 0a26.33 26.33 0 0 0-18.74 7.76 26.4 26.4 0 0 0-3.27 33.45 2.07 2.07 0 0 0 2.63.71l4.24-2.07a2.07 2.07 0 1 0-1.81-3.72ZM64.66 15.6a2.07 2.07 0 1 0-3.77 1.71A22.18 22.18 0 0 1 60 37.4l-2.67-1.27a2.07 2.07 0 0 0-1.78 3.74l4.35 2.07a2.06 2.06 0 0 0 2.61-.72 26.4 26.4 0 0 0 2.15-25.6Z"/>
                </svg>
                </Link>
                <div>
                    <SvgButton src={pointSVG}/>
                    <a href="#" className={classes.link}>Москва, ул. Науки 25</a>
                </div>

                <div className={classes.svgLock}>
                    <SvgButton src={hurtSVG}/>
                    <SvgButton src={peepleSVG}/>
                    <SvgButton src={strollerSVG}/>
                </div>

            </div>

            <div className={classes.underBlock}>
                <Link to="/salePage/ships" onClick={() => handleChangePage('ships')}
                      className={isPage === 'Катера' && classes.active}>Катера</Link>
                <Link to="/salePage/hydro" onClick={() => handleChangePage('hydro')}
                      className={isPage === 'hydro' && classes.active}>Гидроциклы</Link>
                <Link to="/salePage/boats" onClick={() => handleChangePage('boats')}
                      className={isPage === 'boats' && classes.active}>Лодки</Link>
                <Link to="/salePage/rovers" onClick={() => handleChangePage('rovers')}
                      className={isPage === 'rovers' && classes.active}>Вездеходы</Link>
                <Link to="/salePage/snowrovers" href="#" onClick={() => handleChangePage('snowrovers')}
                      className={isPage === 'Снегоходы' && classes.active}>Снегоходы</Link>
                <Link to="/salePage/engines" onClick={() => handleChangePage('engines')} className={isPage === 'Двигатели' && classes.active}>Двигатели</Link>
                <Link href="#">Запчасти</Link>
            </div>

        </div>
    )

}

export default Header