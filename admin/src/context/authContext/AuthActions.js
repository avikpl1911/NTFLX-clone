export const loginStart= ()=>({
    type:"LOGIN_START",
});

export const loginSuccess=(user)=>({
    type:"LOGIN_SUCCESS",
    payload: user,
});

export const loginFaliure=()=>({
   type:"LOGIN_FALIURE",
   
});
//logout
export const logoutStart= ()=>({
    type:"LOGOUT",
});

