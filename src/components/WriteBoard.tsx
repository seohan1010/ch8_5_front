import classes from "../style/pages_style/writeBoard.module.css";
import {useRef, useState } from 'react';
import * as api from "../api/api";




const valid = (title : any, content: string ) => {


}

const WriteBoard = () => {
        const title = useRef<HTMLInputElement>(null);
        const [content, setContent] = useState<string>("");

        const titleRef = title.current?.value;

        const email = localStorage.getItem("email")!.toString();

    
  

    const registerBoard = async() => {

            

        const response = await api.registerBoard(titleRef,email,content);
        console.log(response);
    };

  
    


    const changedContent = (e: any) => {
        setContent(e.target.value);
        
    }

    return (
            <>
                <div className={classes.writeboard__wrap}>
                    <label >title</label>
                    <input  className={classes.input__title} type="text" placeholder="please write title" ref={title} />
                    <label >writer</label>
                    <input  className={classes.input__writer} type="text" readOnly value={email} />
                    <label >content</label>
                    <textarea className={classes.input__content} onChange={(e)=>{changedContent(e)}} placeholder="please writer content" /> 
                    
                <button className={classes.submit__btn} onClick={registerBoard}>register</button>
                </div> 
            </>
    );

};

export default WriteBoard; 