import { Link } from "react-router-dom";
import classes from "../style/pages_style/HomePage.module.css";

const HomePage = () => {
  return (
    <>
      <div className={classes.logo_area}></div>
      <header className={classes.header}>
        <div>
          <ul className={classes.ul}>
            <li className={classes.li}>
              <Link className={classes.Link} to={""}>
                Home
              </Link>
            </li>
            <li className={classes.li}>
              <Link className={classes.Link} to={""}>
                About
              </Link>
            </li>
            <li className={classes.li}>
              <Link className={classes.Link} to={"/login"}>
                {" "}
                login
              </Link>
            </li>
            <li className={classes.li}>
              <Link className={classes.Link} to={""}>
                Appetizer
              </Link>
            </li>
            <li className={classes.li}>
              <Link className={classes.Link} to={""}>
                Pasta
              </Link>
            </li>
            <li className={classes.li}>
              <Link className={classes.Link} to={""}>
                Salad
              </Link>
            </li>
            <li className={classes.li}>
              <Link className={classes.Link} to={""}>
                {" "}
                Burger
              </Link>
            </li>
            <li className={classes.li}>
              <Link className={classes.Link} to={""}>
                Pizza
              </Link>
            </li>
            <li className={classes.li}>
              <Link className={classes.Link} to={""}>
                More Recipe
              </Link>
            </li>
          </ul>
        </div>
      </header>

      <div className={classes.body}>
        <div className={classes.left_div}></div>
        <div className={classes.right_div}></div>
      </div>
    </>
  );
};

export default HomePage;
