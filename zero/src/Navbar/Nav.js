import '../Navbar/Nav.css';
import {Link} from 'react-router-dom';
import { FaShoppingBag } from "react-icons/fa";
import { Linkcss } from '../CSS/Css';
import { useDispatch, useSelector } from 'react-redux';
import { logoutUser } from '../Redux/store';

function Nav(){
    const User = useSelector(state => state.User);
    const dispatch = useDispatch();
    const Logout = () => {
        dispatch(logoutUser());
    }
    return(
        <div className='nav_Wrapper'>
            <div>
                <Link style={Linkcss} to=''>잔반제로</Link>
            </div>
            
            <div>
                <Link style={Linkcss} to='/market'>
                    <FaShoppingBag/>
                </Link>
            </div>

            <div>
                {User.isLogin ?
                <span style={{cursor:'pointer'}} onClick={Logout}>로그아웃</span>
                :
                <Link style={Linkcss} to='/login'>로그인</Link>
                }
            </div>

            
        </div>
    )
}

export default Nav;