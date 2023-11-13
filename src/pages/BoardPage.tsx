import BoardList from "../components/BoardList";
import { useDispatch } from "react-redux";
import { boardListAction } from "../store/slices/boardListReducer";
import { useEffect } from "react";

const BoardPage = () => {


  return (
    <div>
      <BoardList />
    </div>
  );
};

export default BoardPage;
