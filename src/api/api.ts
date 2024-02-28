import { apiClient } from "./ApiClient";


// board crud 

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


const getBoardDetail = async(bno : string)=>{
  const url = "/board/board/detail";

  try{
  const boardDetail = await apiClient.get(url, {params: {
    bno: bno
  }});
  return await boardDetail.data;
}catch(err){
  console.log('err is : ',err);
}

}




// comment crud 

const getCommentList = async(pbno:number)=>{

  const url = "/comment/comment";

try{

  const commentList =   await apiClient.get(url,{params:{pbno:pbno}});
  console.log(commentList.data);
  return commentList.data;
}catch(err){
  console.log(err)
}

}

export { getBoardList, getBoardListBySearchCondition,getBoardDetail,getCommentList };
