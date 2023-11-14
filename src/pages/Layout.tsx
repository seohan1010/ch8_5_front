import { Fragment } from "react";
import classes from "../style/pages_style/Layout.module.css";
import { Link, Outlet, NavLink } from "react-router-dom";
import Footer from "../components/Footer";

//Link 의 className에서 isActive일때 해당 링크가 선택되었다는 것을 알려주는 설정을 해놓자
// Link가 아닌 NavLink이고, style={} 속성으로도 사용할수 있다고 한다. 
const Layout = () => {
  return (
    <Fragment>
      <div className={classes.logo}>
        <Link className={classes.link} to={"/"}>
          #City
        </Link>
      </div>
      <div className={classes.nav_bar}>
        <NavLink
          className={({ isActive }) =>
            isActive ? classes.active_link : classes.link + ""
          }
          to={"/"}
        >
          Home
        </NavLink>
        <NavLink
          className={({ isActive }) =>
            isActive ? classes.active_link : classes.link + ""
          }
          to={"/login"}
        >
          Login
        </NavLink>
        <NavLink
          className={({ isActive }) =>
            isActive ? classes.active_link : classes.link + ""
          }
          to={"/board"}
        >
          Board
        </NavLink>
      </div>
      <Outlet />
      <Footer />
    </Fragment>
  );
};

export default Layout;
