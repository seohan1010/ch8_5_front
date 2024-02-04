import { apiClient } from "./ApiClient";

type typeAction = { type: string; payload: any };
type searchCondition = {
  page: number;
  pageSize: number;
  option: string;
  keyword: string;
};

const getBoardList = async (parameter: typeAction) => {
  const url = "/board/board";
  try {
    const boardList = await apiClient.get(url, { params: parameter.payload });
    return await boardList.data;
  } catch (err) {
    return {
      ph: "",
      list: [],
    };
  }
};

const getBoardListBySearchCondition = async (body: searchCondition) => {
  const url = "/board/search_board";

  try {
    const boardList = await apiClient.post(url, body);

    return await boardList.data;
  } catch (err) {
    return {
      ph: "",
      list: [],
    };
  }
};

export { getBoardList, getBoardListBySearchCondition };
