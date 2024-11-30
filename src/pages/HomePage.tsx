import classes from "../style/pages_style/HomePage.module.css";
import Footer from "../components/Footer";
const HomePage = () => {
  return (
    <>
      <div className={classes.body}>
        <div className={classes.left_div}></div>
        <div className={classes.right_div}></div>
      </div>
      <Footer/>
    </>
  );
};

export default HomePage;
