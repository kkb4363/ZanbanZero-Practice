import '../Navbar/Nav.css';
import {Link, useNavigate} from 'react-router-dom';
import { FaUserAlt,FaShoppingBag } from "react-icons/fa";
import { Linkcss } from '../CSS/Css';
import { useDispatch, useSelector } from 'react-redux';
import { logoutUser } from '../Redux/store';
import { GiHamburgerMenu } from "react-icons/gi";
import styled from 'styled-components';

const LoginWrapper = styled.div`
display:flex;
justify-content:center;
align-items:center;
button{
    width:70px;
    margin:0px 5px;
    height:30px;
}
`


function Nav(){
    const User = useSelector(state => state.User);
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const Logout = () => {
        dispatch(logoutUser());
    }

    const goLoginpage = () => {
        navigate('login');
    }

    const goAccount = () => {
        navigate('account')
    }

    
    return(
        <div className='nav_Wrapper'>
            <div className='nav_Wrapper_tanso'>
                <Link style={Linkcss} to=''><GiHamburgerMenu style={{fontSize:'40px'}}/></Link>
                <span>탄소</span>
            </div>

            <div className='nav_Wrapper_title'>
                <Link style={Linkcss} to=''>
                <span>탄소중립 구내 식당 예약 서비스</span>
                </Link>
                <Link style={Linkcss} to=''>
                <span>Zanbanzero</span>                
                </Link>

            </div>
            <div className='nav_Wrapper_icons'>
                <div>
                    <Link style={Linkcss} to='/login'>
                        <FaUserAlt style={{fontSize:'30px'}}/>
                    </Link>
                </div>
                
                <div>
                    {/* <div>
                    <Link style={Linkcss} to='/market'>
                        <FaShoppingBag/>
                    </Link>
                </div> */}

                <div>
                {User.isLogin ?
                <span style={{cursor:'pointer'}} onClick={Logout}>로그아웃</span>
                :
                <LoginWrapper>
                <button onClick={goLoginpage}>로그인</button>
                <button onClick={goAccount}>회원가입</button>
                </LoginWrapper>
                }
                </div>
                </div>
        
            </div>
        </div>
    )
}

export default Nav;