import axios from "axios"
import { getMoviesFaliure, getMoviesStart, getMoviesSuccess,deleteMovieStart,deleteMovieFaliure,deleteMovieSuccess, createMovieStart, createMovieSuccess, createMovieFaliure } from "./MovieActions"

export const getMovies = async (dispatch)=>{
    dispatch(getMoviesStart());
    try {
      const res = await axios.get("https://ntflx-clone-dmat.vercel.app/api/movies", {
        headers: {
          token: "Bearer " + JSON.parse(localStorage.getItem("user")).accesstoken,
        }
      });
      dispatch(getMoviesSuccess(res.data));
    } catch (err) {
      dispatch(getMoviesFaliure());
    }
  };

  export const createMovie = async (movie,dispatch)=>{
    dispatch(createMovieStart());
    try {
      const res =await axios.post("http://localhost:8800/api/movies/",movie, {
        headers: {
          token: "Bearer " + JSON.parse(localStorage.getItem("user")).accesstoken,
        },
      },{timeout:1000});
      dispatch(createMovieSuccess(res.data));
    } catch (err) {
      dispatch(createMovieFaliure());
    }
  };

  export const deleteMovie = async (id,dispatch)=>{
    dispatch(deleteMovieStart());
    try {
      await axios.delete("http://localhost:8800/api/movies/"+id, {
        headers: {
          token: "Bearer " + JSON.parse(localStorage.getItem("user")).accesstoken,
        },
      });
      dispatch(deleteMovieSuccess(id));
    } catch (err) {
      dispatch(deleteMovieFaliure());
    }
  };



