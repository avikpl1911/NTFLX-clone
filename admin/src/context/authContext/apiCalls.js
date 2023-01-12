import axios from "axios";
import {loginStart,loginFaliure,loginSuccess} from "./AuthActions";
export const login = async (user,dispatch)=>{
    dispatch(loginStart);
    try {
        const res=await axios.post("https://ntflx-clone-dmat.vercel.app/api/auth/login",user);
        res.data.isAdmin && dispatch(loginSuccess(res.data));
        
    } catch (err) {
        dispatch(loginFaliure);
    }
}; 

