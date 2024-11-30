import { NavLink, redirect } from 'react-router-dom';
import classes from '../style/pages_style/Layout.module.css';
import { useAuth } from "../components/security/AuthContext";

interface ChildProps {
  toggleHandler: ()=> void
}

const MobileNav :React.FC<ChildProps> = (props) => {

  const authContext = useAuth();

  const logoutHandler = () => {
    authContext.logout();
    redirect("/");
  };



    return (
            <>
                
                <div className={classes.mobile_nav}>    
                    <NavLink to={"/"} onClick={props.toggleHandler}> Home</NavLink>
                    <NavLink to={"board"} onClick={props.toggleHandler}>Board</NavLink>
                    <NavLink to={"/chat"} onClick={props.toggleHandler}>Chat</NavLink>
                   {!localStorage.getItem("email")  ? <a href={"/login"} onClick={props.toggleHandler}>Login</a>:<a href={"/"} onClick={logoutHandler}>Logout</a>}
                </div>

            </>
           );
}


export default MobileNav;