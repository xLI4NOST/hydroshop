import classes from './svgButton.module.sass'

const svgButton = (props) => {

    return (
        <button className={classes.button}><img src={props.src}/></button>
    )

}

export default svgButton