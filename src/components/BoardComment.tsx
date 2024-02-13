import { isButtonElement } from 'react-router-dom/dist/dom';
import classes from '../style/pages_style/boardComment.module.css';
import { useEffect } from 'react';

const BoardComment = ({bno}:any)=>{
    
    console.log('bno from component is :',bno)
useEffect(()=>{
   console.log('bno is ',bno);
},[bno]);


return(
    <>
    <div className={classes.gap}></div>
        <div className={classes.comment_wrap}> 
            <div className={classes.comment_header}>this is for header. bno is {bno}</div>
            <div className={classes.comment_content}> this is for content</div>
            <button className={classes.del_btn}>delete</button>
            {true?<button className={classes.mod_btn}>modify</button>:<button>save</button>}
        </div>




    </>
)

}


export default BoardComment;
