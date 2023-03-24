import React from "react";
import classes from "./wrapper.module.sass"

export const Wrapper =({children})=>{
    return(
        <div className={classes.wrapper}>
            {children}
        </div>
    )
}