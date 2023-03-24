import classes from './Footer.module.sass'
import {Wrapper} from "../layout/Wrapper";
import BlueButton from "../UI/BlueButton/BlueButton";
import inst from "../../images/svg/instagram- .svg";
import vk from "../../images/svg/vk .svg"
import facebook from "../../images/svg/facebook.svg"
import youtube from "../../images/svg/youtube .svg"

const Footer = () => {

    return (
    <div className={classes.footer}>
        <Wrapper>
            <div className={classes.content}>
                <div className={classes.mail}>
                    <h2>Подпишитесь на нашу рассылку
                        <br/>и узнавайте о акция быстрее</h2>
                    <form>
                        <input placeholder="Введите ваш e-mail:" type='text'/>
                        <BlueButton>ОТПРАВИТЬ</BlueButton>
                    </form>
                </div>
                <div className={classes.list}>
                    <h2>Информация</h2>
                    <ul>
                        <li>О компании</li>
                        <li>Контакты</li>
                        <li>Акции</li>
                        <li>Магазины</li>
                    </ul>
                </div>
                <div className={classes.list}>
                    <h2>Интернет-магазин</h2>
                    <ul>
                        <li>Доставка и самовывоз</li>
                        <li>Оплата</li>
                        <li>Возврат и обмен</li>
                        <li>Новости</li>
                    </ul>
                </div>
                <div className={classes.imgBlock}>
                    <img src={inst} alt="Instagram"/>
                    <img src={vk} alt="VK"/>
                    <img src={facebook} alt="Facebook"/>
                    <img src={youtube} alt="YouTube"/>
                </div>
                <div className={classes.boxDown}>
                    <p>Договор оферты</p>
                    <p>Политика обработки персональных данных</p>
                </div>
            </div>

        </Wrapper>

    </div>
    )

}

export default Footer