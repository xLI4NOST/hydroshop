import classes from './Search.module.sass'
import BlueButton from "../UI/BlueButton/BlueButton";
import {useState} from "react";

const Search = () => {
    const [active, setActive]=useState('mark')
    const handleClickButton = name =>{
        setActive(name)
    }

    const placeholder =()=>{
        switch (active){
            case 'number':
                return 'Введите номер'
            case 'name' :
                return 'Введите название'
            case 'mark' :
                return 'Введите марку'
            default:
                break
        }

    }

    return (
        <div className={classes.search}>
    <div className={classes.searchTypeBlock}>
        <button onClick={ () => handleClickButton('number')} className={active === 'number' && classes.active} >Поиск по номеру</button>
        <button onClick={ ()=> handleClickButton ('mark')} className={active === 'mark' && classes.active} >Поиск по марке</button>
        <button onClick={()=> handleClickButton ('name')} className={active === 'name' && classes.active}>Поиск по названию товара</button>
    </div>
        <form className={classes.searchForm}>
            <input placeholder={ placeholder()} type="text"/>
            <BlueButton>ИСКАТЬ</BlueButton>
        </form>
        </div>
    )

}

export default Search