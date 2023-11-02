import { Link } from "react-router-dom";
import classes from "../style/pages_style/HomePage.module.css";

const HomePage = () => {
  return (
    <>
      <header className={classes.header}>
        <div >
          <ul className={classes.ul}>
            <li className={classes.li}>
              <Link to={""}>Home</Link>
            </li>
            <li className={classes.li}>
              <Link to={""}>About</Link>
            </li>
            <li className={classes.li}>
              <Link to={""}> Dessert</Link>
            </li>
            <li className={classes.li}>
              <Link to={""}>Appetizer</Link>
            </li>
            <li className={classes.li}>
              <Link to={""}>Pasta</Link>
            </li>
            <li className={classes.li}>
              <Link to={""}>Salad</Link>
            </li>
            <li className={classes.li}>
              <Link to={""}> Burger</Link>
            </li>
            <li className={classes.li}>
              <Link to={""}>Pizza</Link>
            </li>
            <li className={classes.li}>
              <Link to={""}>More Recipe</Link>
            </li>
          </ul>
        </div>
      </header>
    </>
  );
};

export default HomePage;
