import { Fragment } from "react";
import classes from "./HeaderTwo.module.css";
import Items from "../Merch/Items";

const HeaderTwo = () => {
  return (
    <Fragment>
      <header className={classes.header}>
        <main>
          <h1>Merch</h1>
        </main>
      </header>
      <Items />
    </Fragment>
  );
};

export default HeaderTwo;
