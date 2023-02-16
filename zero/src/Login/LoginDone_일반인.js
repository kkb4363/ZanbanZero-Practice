import { useDispatch, useSelector } from 'react-redux';
import { logoutUser } from '../Redux/store';
import '../Login/LoginDone_일반인.css';


function LoginDone_일반인(){
    const User = useSelector(state => state.User);
    const dispatch = useDispatch();
    const Logout = () => {
        dispatch(logoutUser());
    }
    return(
    <div className='LoginWrapper'>
        <p>{User.ID}님 안녕하세요</p>
        <button onClick={()=>Logout()}>로그아웃</button>
    </div>
    )
}

export default LoginDone_일반인;