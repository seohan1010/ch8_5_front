import { Fragment, useEffect } from "react";
import classes from "../style/pages_style/Layout.module.css";
import { Link, Outlet, NavLink, redirect } from "react-router-dom";
import Footer from "../components/Footer";
import { useAuth } from "../components/security/AuthContext";

//Link 의 className에서 isActive일때 해당 링크가 선택되었다는 것을 알려주는 설정을 해놓자
// Link가 아닌 NavLink이고, style={} 속성으로도 사용할수 있다고 한다.
const Layout = () => {
  const authContext = useAuth();
  const loginStatus = localStorage.getItem("email");

  useEffect(() => {
    console.log("isAuthenticated status has been changed");
    const getToken = async () => {
      const auth = await authContext.authStatus();
      console.log(auth);
    };
    console.log(localStorage.getItem("email"));
    getToken();
  }, [authContext.isAuthenticated]);

  const logoutHandler = () => {
    authContext.logout();
    redirect("/");
  };

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
        {loginStatus == null ? (
          <NavLink
            className={({ isActive }) =>
              isActive ? classes.active_link : classes.link + ""
            }
            to={"/login"}
          >
            Login
          </NavLink>
        ) : (
          <NavLink to={"/"} className={classes.link} onClick={logoutHandler}>
            Logout
          </NavLink>
        )}
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
      {/* <Footer /> */}
    </Fragment>
  );
};

export default Layout;
