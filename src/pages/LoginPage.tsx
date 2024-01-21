import { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import classes from "../style/pages_style/LoginPage.module.css";
import { useAuth } from "../components/security/AuthContext";

const LoginPage = () => {
  const emailRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);

  const authContext = useAuth();
  const navigate = useNavigate();
  const submitHanlder = async () => {
    const emailref = emailRef.current?.value;
    const passwordref = passwordRef.current?.value;

    if (emailref?.trim().length === 0 || passwordref?.trim().length === 0) {
      return;
    }

    const bool = await authContext.login(emailref, passwordref);
    console.log("bool from login-page", bool);
    if (!bool) {
      setIsAuthenticated(bool);
      return;
    } else {
      navigate('/');
    }
  };

  

  return (
    <>
      <div style={{ textAlign: "center" }}>
        this is login page
        <div className={classes.main_wrap}>
          <div className={classes.text}>Login</div>
          <div className={classes.messsage_wrap}>
            {!isAuthenticated && (
              <p style={{ color: "orangered" }}>
                {"please check your email or password"}
              </p>
            )}
          </div>
          <div className={classes.gap}></div>
          <label htmlFor="email">email</label>
          <br />
          <input
            className={classes.input_email}
            ref={emailRef}
            name="email"
            type="text"
            onFocus={() => setIsAuthenticated(true)}
          />
          <br />
          <label htmlFor="password">password</label>
          <br />
          <input
            className={classes.input_password}
            name="password"
            type="password"
            ref={passwordRef}
          />
          <br />
          <div></div>
          <button className={classes.button} onClick={submitHanlder}>
            Login
          </button>
        </div>
      </div>
    </>
  );
};

export default LoginPage;
