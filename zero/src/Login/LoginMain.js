import { useSelector } from "react-redux";
import NoLogin from '../Login/NoLogin';
import OkLogin from '../Login/OkLogin';

function LoginMain(){
    let User = useSelector(state=>state.User);
    console.log(User.isLogin)
    
    return(
        <>
            {User.isLogin ? <OkLogin/>:<NoLogin/>}
        </>
    )
}

export default LoginMain;