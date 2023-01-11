export const getMoviesStart= ()=>({
    type:"GET_MOVIES_START",
});
export const getMoviesSuccess= (movies)=>({
    type:"GET_MOVIES_SUCCESS",
    payload: movies
});
export const getMoviesFaliure= ()=>({
    type:"GET_MOVIES_FALIURE",
});

export const deleteMovieStart= ()=>({
    type:"DELETE_MOVIE_START",
});
export const deleteMovieSuccess= (id)=>({
    type:"DELETE_MOVIE_SUCCESS",
    payload: id
});
export const deleteMovieFaliure= ()=>({
    type:"DELETE_MOVIE_FALIURE",
});


export const createMovieStart= ()=>({
    type:"CREATE_MOVIE_START",
});
export const createMovieSuccess= (movie)=>({
    type:"CREATE_MOVIE_SUCCESS",
    payload: movie
});
export const createMovieFaliure= ()=>({
    type:"CREATE_MOVIE_FALIURE",
});

export const updateMovieStart= ()=>({
    type:"CREATE_MOVIE_START",
});
export const updateMovieSuccess= (movie)=>({
    type:"CREATE_MOVIE_SUCCESS",
    payload: movie
});
export const updateMovieFaliure= ()=>({
    type:"CREATE_MOVIE_FALIURE",
});