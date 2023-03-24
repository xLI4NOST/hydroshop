import classes from './price.module.sass'

const price = ({children}) => {

    return (
    <h2 className={classes.h2}>{children}</h2>
    )

}

export default price