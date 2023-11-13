import { Fragment } from "react";
import classes from "../style/pages_style/Layout.module.css";
import { Link, Outlet } from "react-router-dom";

//link 의 className에서 isActive일때 해당 링크가 선택되었다는 것을 알려주는 설정을 해놓자
const Layout = () => {
  return (
    <Fragment>
      <div className={classes.logo}>
        <Link className={classes.link} to={"/"}>
          #City
        </Link>
      </div>
      <div className={classes.nav_bar}>
        <Link className={classes.link} to={"/"}>
          Home
        </Link>
        <Link className={classes.link} to={"/login"}>
          Login
        </Link>
        <Link className={classes.link} to={"/board"}>
          Board
        </Link>
      </div>
      <Outlet />
    </Fragment>
  );
};

export default Layout;
