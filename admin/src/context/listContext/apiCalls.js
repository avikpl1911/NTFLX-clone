import axios from "axios"
import { getListsFaliure, getListsSuccess,getListsStart, deleteListStart, deleteListSuccess, deleteListFaliure, createListStart, createListSuccess, createListFaliure } from "./ListActions";


export const getLists = async (dispatch)=>{
    dispatch(getListsStart());
    try {
      const res = await axios.get("https://ntflx-clone-dmat.vercel.app/api/lists", {
        headers: {
          token: "Bearer " + JSON.parse(localStorage.getItem("user")).accesstoken,
        },
      });
      dispatch(getListsSuccess(res.data));
    } catch (err) {
      dispatch(getListsFaliure());
    }
  };

  export const createList = async (list,dispatch)=>{
    dispatch(createListStart());
    try {
      const res =await axios.post("http://localhost:8800/api/lists",list, {
        headers: {
          token: "Bearer " + JSON.parse(localStorage.getItem("user")).accesstoken,
        },
      });
      dispatch(createListSuccess(res.data));
    } catch (err) {
      dispatch(createListFaliure());
    }
  };

  export const deleteList = async (id,dispatch)=>{
    dispatch(deleteListStart());
    try {
      await axios.delete("http://localhost:8800/api/lists/"+id, {
        headers: {
          token: "Bearer " + JSON.parse(localStorage.getItem("user")).accesstoken,
        },
      });
      dispatch(deleteListSuccess(id));
    } catch (err) {
      dispatch(deleteListFaliure());
    }
  };



