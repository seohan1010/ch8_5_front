import { apiClient } from "./ApiClient";

type typeAction = { type: string; payload: any };

const getBoardList = async (parameter:typeAction) => {
  const url = "/board/board";
  const boardList = await apiClient.get(url, {params:parameter.payload});
  return await boardList.data; 
  console.log(boardList.data);
};



export { getBoardList };
