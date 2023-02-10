import '../Navbar/Nav.css';
import {Link} from 'react-router-dom';
import { FaShoppingBag } from "react-icons/fa";
import { Linkcss } from '../CSS/Css';

function Nav(){
    
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
                <Link style={Linkcss} to='/login'>로그인</Link>
            </div>

            
        </div>
    )
}

export default Nav;