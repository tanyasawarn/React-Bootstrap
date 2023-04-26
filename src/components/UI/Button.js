import { Fragment } from "react";
import classes from "./Button.module.css";

const Button = () =>{
   return (
    <Fragment>
        <button className={classes.button}>$ 12.99</button>
        <button className={classes.button}>Add To Cart</button>
    </Fragment>
   )
};
export default Button;