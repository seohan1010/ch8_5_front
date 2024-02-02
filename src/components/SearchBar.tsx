import { useRef, useEffect, ChangeEvent, useState } from "react";
import classes from "../style/searchBar.module.css";

const SearchBar = ({ searchBoard, inputStatus, checkInput }: any) => {
  const selectedRef = useRef<any>();
  const [input, setInput] = useState<string>("");

  // useEffect에서 input안에 값이 있는지를 확인한 다음에
  // 결과를 boolean값으로 checkInput으로 넘겨준다.
  useEffect(() => {
    const inputData = input.trim();

    const data = {
      status: false,
      option: selectedRef.current.value,
      keyword: input,
      page: 1,
      pageSize: 10,
    };

    if (inputData) {
      console.log("there is data");
      data.status = true;
      checkInput(data);
    } else {
      checkInput(data);
    }
  }, [inputStatus]);

  const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    console.log(e.target.value);
    setInput(e.target.value);
  };

  // 여기서는 검색 조건 및 검색어를 BoardList로 넘겨준다.
  const onClickHandler = () => {
    const data = {
      keyword: input,
      option: selectedRef.current.value,
      page: 0,
      pageSize: 0,
    };
    console.log(input);
    console.log(selectedRef.current.value);
    searchBoard(data);
  };

  return (
    <>
      <div className={classes.search_bar}>
        <select className={classes.select} ref={selectedRef}>
          <option value="A">제목 + 내용</option>
          <option value="T">제목만</option>
          <option value="W">작성자</option>
        </select>
        <input
          type="text"
          className={classes.input}
          onChange={(e) => onChangeHandler(e)}
        />
        <button className={classes.button} onClick={onClickHandler}>
          {" "}
          검색{" "}
        </button>
      </div>
    </>
  );
};

export default SearchBar;
