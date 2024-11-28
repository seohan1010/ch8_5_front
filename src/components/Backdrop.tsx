import classes from "../style/pages_style/Layout.module.css";

interface ChildProps {
    toggleHandler: () => void
 }

const  BackDrop: React.FC<ChildProps> = (props)  => {
       
    return (
            <>
                <div className={classes.backdrop} onClick={props.toggleHandler}></div> 
            </>
    );
}



export default BackDrop;