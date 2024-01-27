import { apiClient } from "./ApiClient";

type typeAction = { type: string; payload: any };

const getBoardList = async (parameter: typeAction) => {
  const url = "/board/board";
  const boardList = await apiClient.get(url);
  console.log(boardList.data);
};

// export const getBoardList = async (action: typeAction) => {
//   const url = "http://localhost/board/board";
//   const obj = {
//     method: "GET",
//     headers: { "Content-Type": "application/json" },
//   };
//   const response = await fetch(url, obj).catch((err) => err);
//   console.log("response is :", response);
//   try {
//     const status = response.status;
//     console.log("status is :", status);
//     const { list, ph } = await response.json();
//     console.log(list, ph, status);
//     return { list, ph, status };
//   } catch (err) {
//     console.log("err occured at getBoardList!!! err is : ", err);
//     return { list: [], ph: {}, status: response.status };
//   }
// };

export { getBoardList };
