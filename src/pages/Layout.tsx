import { Fragment, useEffect, useState } from "react";
import classes from "../style/pages_style/Layout.module.css";
import {  Outlet, NavLink, redirect } from "react-router-dom";
import { useAuth } from "../components/security/AuthContext";
import BackDrop from '../components/Backdrop';
import MobileNav from '../components/MobileNav';

//Link 의 className에서 isActive일때 해당 링크가 선택되었다는 것을 알려주는 설정을 해놓자
// Link가 아닌 NavLink이고, style={} 속성으로도 사용할수 있다고 한다.
const Layout = () => {
  const authContext = useAuth();
  const loginStatus = localStorage.getItem("email");
  const [toggle, setToggle] = useState<boolean>(false);

  useEffect(() => {
 
       console.log("loginstatus is changed in layout component",loginStatus);
       console.log('authStatus is : ', authContext.authStatus());
       console.log('authContext is :',authContext);
  }, [authContext.authStatus()]);

  const logoutHandler = () => {
    authContext.logout();
    // 여기서는 강제로 윈도우를 reload 해주어야 한다.
    // 그렇지 않으면 layout의 logout 문구가 login으로 변경이 되지 않는다. 
    window.location.reload();
    redirect("/");
  };

  const toggleHandler = () => {
      console.log("toggleHandler called");
      if(toggle) {
        setToggle(false);
      }else {
        setToggle(true);
      }

    }

  return (
    <Fragment>
      {/* toggle로 mobilenav와 backdrop이 모두 같이 작동하도록 하였다. */}
     {toggle && <BackDrop  toggleHandler={toggleHandler} />}
     {toggle && <MobileNav toggleHandler={toggleHandler} />}
      <div className={classes.nav_bar__items}>
        <div className={classes.toggle_wrap} onClick={toggleHandler}>
        <button className={classes.toggle_button}>
          <span className={classes.toggle_button__bar}></span>
          <span className={classes.toggle_button__bar}></span>
          <span className={classes.toggle_button__bar}></span>
        </button>
        </div>
        <div className={classes.nav_bar__item}>
        <NavLink
          className={({ isActive }) =>
            isActive ? classes.active_link : classes.link + ""
          }
          to={"/"}
        >
          Home
        </NavLink>
        {!localStorage.getItem('email') ? (
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
        <NavLink
          className={({ isActive }) =>
            isActive ? classes.active_link : classes.link + ""
          }
          to={"/chat"}
        >
          chatting
        </NavLink>
        </div>
      </div>
      <Outlet />
    </Fragment>
  );
};

export default Layout;
