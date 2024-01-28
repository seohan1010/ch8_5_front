import { Link } from "react-router-dom";
import classes from "../style/pages_style/boardList.module.css";
import { useEffect, useState } from "react";
import * as api from "../api/api";

type board = { bno: string; writer: string; title: string; writeDate: string };

const BoardList = () => {
  const [selectedFiles, setSelectedFiles] = useState<any>();

  useEffect(() => {
    const payload = { page: 2, pageSize: 10 };
    const parameter = { type: "", payload: payload };

    api.getBoardList(parameter);
  }, []);

  return (
    <>
      <div className={classes.table_wrap}>
        this is boardList
        <table className={classes.table}>
          <tbody>
            <tr>
              <td>writer</td>
              <td>title</td>
              <td>date</td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
};

export default BoardList;
