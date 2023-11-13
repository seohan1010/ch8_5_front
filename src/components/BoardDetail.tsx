import { useParams } from "react-router-dom";
import classes from "../style/pages_style/boardDetail.module.css";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

const BoardDetail = () => {
  const params = useParams();

  useEffect(() => {}, []);

  return (
    <div className={classes.board_detail_wrap}>
      this is BoardDetail
      <div>{`bno is ${params.bno}`}</div>
    </div>
  );
};

export default BoardDetail;
