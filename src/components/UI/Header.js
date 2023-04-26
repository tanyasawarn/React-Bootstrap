import { Fragment } from "react";
import classes from "./Header.module.css";

const Header = () =>{
   return (
    <Fragment>
         <header className={classes.header}> 
        <main>
            <h1>The Generics</h1>
        </main>
    </header>
    <h3 className={classes.h3}>Music</h3>

  
    </Fragment>

   )
};

export default Header;