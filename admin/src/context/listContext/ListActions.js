export const getListsStart= ()=>({
    type:"GET_LISTS_START",
});
export const getListsSuccess= (movies)=>({
    type:"GET_LISTS_SUCCESS",
    payload: movies
});
export const getListsFaliure= ()=>({
    type:"GET_LISTS_FALIURE",
});

export const deleteListStart= ()=>({
    type:"DELETE_LIST_START",
});
export const deleteListSuccess= (id)=>({
    type:"DELETE_LIST_SUCCESS",
    payload: id
});
export const deleteListFaliure= ()=>({
    type:"DELETE_LIST_FALIURE",
});


export const createListStart= ()=>({
    type:"CREATE_LIST_START",
});
export const createListSuccess= (movie)=>({
    type:"CREATE_LIST_SUCCESS",
    payload: movie
});
export const createListFaliure= ()=>({
    type:"CREATE_LIST_FALIURE",
});

// export const updateListStart= ()=>({
//     type:"UPDATE_LIST_START",
// });
// export const updateListSuccess= (movie)=>({
//     type:"UPDATE_LIST_SUCCESS",
//     payload: movie
// });
// export const updateListFaliure= ()=>({
//     type:"UPDATE_LIST_FALIURE",
// });