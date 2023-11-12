import { Link } from "react-router-dom";
import classes from "../style/pages_style/HomePage.module.css";

const HomePage = () => {
  return (
    <>
      <div className={classes.logo_area}></div>
      <header className={classes.header}>
          this is header
      </header>
      <div className={classes.body}>
        <div className={classes.left_div}></div>
        <div className={classes.right_div}></div>
      </div>
    </>
  );
};

export default HomePage;
