import { useParams,Link } from "react-router-dom";
import classes from '../style/pages_style/boardDetail.module.css';
import { useEffect, useState } from "react";
import BoardComment  from "./BoardComment";
import { getBoardDetail } from "../api/api";


type board = {

  bno : number;
  content : string;
  deletedYn : string;
  title : string;
  viewCnt : number;
  writeDate : string;
  writer : string;
}



const BoardDetail = () => {
  const params = useParams();
  const [board ,setBoard] = useState<board>();


  const test = {
    bno : '',
    content : '',
    deletedYn : '',
    title : '',
    viewCnt : '',
    writeDate : '',
    writer :''
  }

  useEffect(() => {
    const bno : any = params.bno;
    const boardDetail = async ()=>{

      const data = await getBoardDetail(bno);
      console.log(data);
      setBoard(data);
      test.bno=data.bno;
      test.content=data.content;
      test.title = data.title;
      test.writer= data.writer;
      
    }
    
    boardDetail();

  }, []);
    console.log(params.bno)



  return (
    <div className={classes.board_detail_wrap}>
        {/* relative의 default 값이 route인거 같다. */}


    <Link className={classes.to_prev} to='..'
      relative='path'
    >Back to board</Link>
    <br/>
      <div className={classes.text_bno}>{board?.bno}</div>
      <div className={classes.title} >{board?.title}</div>
      <div className={classes.writer} >{board?.writer}</div>
      <div className={classes.write_date} >{board?.writeDate}</div>
      <div className={classes.content}> {board?.content}</div>

        

      <BoardComment bno={params.bno} />
      <BoardComment bno={params.bno} />
      <BoardComment bno={params.bno} />
      <BoardComment bno={params.bno} />
      


    </div>
  )
};

export default BoardDetail;
