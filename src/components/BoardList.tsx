import { Link } from "react-router-dom";
import classes from "../style/pages_style/boardList.module.css";
import { useEffect, useState } from "react";
import * as api from "../api/api";

import SearchBar from "./SearchBar";

interface Board {
  bno: string;
  writer: string;
  title: string;
  writeDate: string;
}

interface Navi {
  id: number;
  num: number;
}

type searchCondition = {
  keyword: string;
  option: string;
  page: number;
  pageSize: number;
};

const BoardList = () => {
  const [page, setPage] = useState<number>(1);
  const [list, setList] = useState<Board[]>([]);
  const [showBefore, setShowBefore] = useState<boolean>(false);
  const [showNext, setShowNext] = useState<boolean>(false);
  const [navi, setNavi] = useState<Navi[]>([]);
  const [inputStatus, setInputStatus] = useState<boolean>(false);
  const [searchInput, setSearchInput] = useState<boolean>(false);

  const payload = { page: page, pageSize: 10 };
  const parameter = { type: "", payload: payload };
  useEffect(() => {
    const getBoardList = async () => {
      const { ph, list } = await api.getBoardList(parameter);
      setList(list);

      const { beginPage, endPage, showNext, showPrev } = ph;
      console.log(beginPage, endPage, showNext, showPrev);
      setShowBefore(showBefore);
      setShowNext(showNext);

      const arr = [];
      for (let i = beginPage; i <= endPage; i++) {
        arr.push({ id: i, num: i });
      }
      // navi를 할당
      setNavi(arr);
      console.log(arr);

      console.log(ph, list);
    };

    getBoardList();
  }, []);

  const getBoardListBySearch = async () => {};

  // 검색창에 데이터가 있는지의 여부에 따라서 전체 데이터에서 Board 데이터를 가지고 오던가
  // 검색조건에 따른 데이터를 가지고 온다.
  const onClickHandler = (e: number) => {
    setInputStatus(() => !inputStatus);
    setPage(e);

    console.log(e);
  };

  const searchBoard = async (e: searchCondition) => {
    e.page = page;
    e.pageSize = 10;
    const list = await api.getBoardListBySearchCondition(e);
    console.log(await list.data) 

  };

  const checkInput = (e: boolean) => {
    setSearchInput(e);
  };

  return (
    <>
      <div className={classes.table_wrap}>
        <div className={classes.search_bar}>
          <SearchBar
            searchBoard={searchBoard}
            inputStatus={inputStatus}
            checkInput={checkInput}
          />
        </div>
        <table className={classes.table}>
          <thead>
            <tr>
              <td>writer</td>
              <td>title</td>
              <td>date</td>
            </tr>
          </thead>
          <tbody>
            {list.map((data: Board) => (
              <tr key={data.bno}>
                <td>{data.writer}</td>
                <td className={classes.td_link}>
                  <Link to={""}>{data.title}</Link>
                </td>
                <td>{data.writeDate}</td>
              </tr>
            ))}
          </tbody>
        </table>
        {/* <div className={classes.write_btn_wrap}> */}
        <button className={classes.write_btn}>
          <Link className={classes.btn_link} to={""}>
            글쓰기{" "}
          </Link>
        </button>
        {/* </div> */}
        <div className={classes.nav_section}>
          {showBefore && <button>{"<"}</button>}
          <div className={classes.nav_wrap}>
            <ul className={classes.nav_ul}>
              {navi.map((data: Navi) => (
                <li
                  className={classes.nav_li}
                  key={data.id}
                  onClick={() => onClickHandler(data.id)}
                >
                  {data.num}
                </li>
              ))}
            </ul>
          </div>
          {showNext && (
            <button style={{ display: "inline-block" }}>{">"}</button>
          )}
        </div>
      </div>
    </>
  );
};

export default BoardList;
