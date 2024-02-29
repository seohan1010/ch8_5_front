import { isButtonElement } from 'react-router-dom/dist/dom';
import classes from '../style/pages_style/boardComment.module.css';
import { useEffect, useState } from 'react';


interface comment{
    cno:number;
    pbno:number;
    commenter:string;
    comment:string;
    registerDate:string;
    updateDate:string;
    deletedYn:string;
}

const BoardComment = ({data}:any)=>{
    


useEffect(()=>{


},[]);


return(
    <>
    <div className={classes.gap}></div>
        <div className={classes.comment_wrap}> 
            <div className={classes.comment_header}>{data.commenter}</div>
            <div className={classes.comment_content}>{data.comment}</div>
            <button className={classes.del_btn}>delete</button>
            {true?<button className={classes.mod_btn}>modify</button>:<button className={classes.save_btn}>save</button>}
        </div>




    </>
)

}


export default BoardComment;
