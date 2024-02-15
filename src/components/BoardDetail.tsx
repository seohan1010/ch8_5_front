9import { useParams,Link } from "react-router-dom";
import classes from "../style/pages_style/boardDetail.module.css";
import { useEffect } from "react";
import BoardComment  from "./BoardComment";



const BoardDetail = () => {
  const params = useParams();

  useEffect(() => {}, []);
    console.log(params.bno)
  return (
    <div className={classes.board_detail_wrap}>
        {/* relative의 default 값이 route인거 같다. */}


    <Link className={classes.to_prev} to='..'
      relative='path'
    >Back to board</Link>
    <br/>
      <div className={classes.text_bno}>{params.bno}</div>
      <div className={classes.title} ></div>
     <div className={classes.writer} ></div>
      <div className={classes.write_date} ></div>
      <div className={classes.content}> </div>


      <BoardComment bno={params.bno} />

 <BoardComment bno={params.bno} />
      


    </div>
  )
};

export default BoardDetail;
