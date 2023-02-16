import { useSelector } from "react-redux";
import NoLogin from '../Login/NoLogin';
import LoginDone_일반인 from './LoginDone_일반인';
import LoginDone_사업자 from "./LoginDone_사업자";

function LoginMain(){
    let User = useSelector(state=>state.User);
    console.log(User)
    return(
        <>
            {User.isLogin ? 
            User.admin ? <LoginDone_사업자/> : <LoginDone_일반인/>
            :<NoLogin/>}
        </>
    )
}

export default LoginMain;