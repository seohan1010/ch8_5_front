import { isButtonElement } from 'react-router-dom/dist/dom';
import classes from '../style/pages_style/boardComment.module.css';
import { useEffect, useState } from 'react';
import { getCommentList}  from '../api/api';


interface comment{
    cno:number;
    pbno:number;
    commenter:string;
    comment:string;
    registerDate:string;
    updateDate:string;
    deletedYn:string;
}

const BoardComment = ({bno}:any)=>{
    
    const [commentList, setCommentList] = useState<comment[]>([]);

    console.log('bno from component is :',bno)

console.log('this is for test');

useEffect(()=>{
   console.log('bno is ',bno);
   
   const getBoardCommentList = async(pbno:number) =>{

   const commentList =  await getCommentList(pbno);
        console.log(commentList);
        setCommentList(commentList);
   }

   getBoardCommentList(bno);

},[bno]);


return(
    <>
    <div className={classes.gap}></div>
        <div className={classes.comment_wrap}> 
            <div className={classes.comment_header}>this is for header. bno is {bno}</div>
            <div className={classes.comment_content}> {commentList[0].comment}</div>
            <button className={classes.del_btn}>delete</button>
            {true?<button className={classes.mod_btn}>modify</button>:<button className={classes.save_btn}>save</button>}
        </div>




    </>
)

}


export default BoardComment;
