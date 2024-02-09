import { useParams,Link } from "react-router-dom";
import classes from "../style/pages_style/boardDetail.module.css";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

const BoardDetail = () => {
  const params = useParams();

  useEffect(() => {}, []);
    console.log(params.bno)
  return (
    <div className={classes.board_detail_wrap}>
{/* relative의 default 값이 route인거 같다. */}
    <Link to='..'
      relative='path'
    >Back to board</Link>

      this is BoardDetail
      <div>{`bno is ${params.bno}`}</div>
    </div>
  );
};

export default BoardDetail;
