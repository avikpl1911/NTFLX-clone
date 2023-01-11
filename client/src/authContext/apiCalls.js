import axios from "axios";
import {loginStart,loginFaliure,loginSuccess} from "./AuthActions";
export const login = async (user,dispatch)=>{
    dispatch(loginStart);
    try {
        const res=await axios.post("http://localhost:8800/api/auth/login",user);
        dispatch(loginSuccess(res.data));
        
    } catch (err) {
        dispatch(loginFaliure);
    }
}; 

