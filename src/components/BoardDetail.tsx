import { useParams,Link } from "react-router-dom";
import classes from '../style/pages_style/boardDetail.module.css';
import { useEffect, useState } from "react";
import BoardComment  from "./BoardComment";
import { getBoardDetail, getCommentList } from "../api/api";


interface board{
  
  bno : number;
  content : string;
  deletedYn : string;
  title : string;
  viewCnt : number;
  writeDate : string;
  writer : string;
  
}


interface comment{
  cno:number;
  pbno:number;
  commenter:string;
  comment:string;
  registerDate:string;
  updateDate:string;
  deletedYn:string;
}



const BoardDetail = () => {
  const params = useParams();
  const [board ,setBoard] = useState<board>();
  const [comment,setComment] = useState<comment[]>([]);

  useEffect(() => {

    const bno : any = params.bno;
    
    const boardDetail = async ()=>{

      const data = await getBoardDetail(bno);
      console.log(data);
      setBoard(data);
      
    }
    boardDetail();

    
    const retrieveComment = async()=>{

      const commentList = await getCommentList(bno);

      console.log(commentList);
      setComment(commentList);
    }

      retrieveComment();

  }, []);


  return (
    <div className={classes.board_detail_wrap}>
        {/* relative의 default 값이 route인거 같다. */}


    <Link className={classes.to_prev} to='..'
      relative='path'
    >Back to board</Link>
    <br/>
      {board?.content}
      <div className={classes.text_bno}>{board?.bno}</div>
      <div className={classes.title} >{board?.title}</div>
      <div className={classes.writer} >{board?.writer}</div>
      <div className={classes.write_date} >{board?.writeDate}</div>
      <div className={classes.content}> {board?.content}</div>


      {comment.map((comment :comment)=><BoardComment data={comment} />)}


    </div>
  )
};

export default BoardDetail;
