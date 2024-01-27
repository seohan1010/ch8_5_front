import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import classes from "../style/pages_style/boardList.module.css";
import { useEffect, useState } from "react";
import { boardListAction } from "../store/slices/boardListReducer";

type board = { bno: string; writer: string; title: string; writeDate: string };

const filteredList = (state: any) => {
  return state.boardList.boardList === undefined
    ? []
    : state.boardList.boardList;
};

const BoardList = () => {
  const [selectedFiles, setSelectedFiles] = useState<any>();

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(boardListAction.GET_BOARDLIST_REQUESTED(""));
    console.log("dispatched at boardPage");
  }, []);

  const boardList = useSelector(filteredList);

  const onSelectFile = (e: any) => {};

  return (
    <>
      <div className={classes.table_wrap}>
        this is boardList
        <table className={classes.table}>
          <thead className={classes.thead}>
          <tr>
            <td>writer</td>
            <td>title</td>
            <td>date</td>
          </tr>
        </thead>
          <tbody className={classes.tbody}>{"list"}</tbody>
          <tfoot className={classes.tfoot}>this is t foot</tfoot>
        </table>
      </div>
    </>
  );
};

export default BoardList;
