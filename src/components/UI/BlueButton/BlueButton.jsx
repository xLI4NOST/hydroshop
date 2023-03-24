import classes from './BlueButton.module.sass'

const BlueButton = ({children} ) => {

    return (
    <button className={classes.button}>{children}</button>
    )

}

export default BlueButton