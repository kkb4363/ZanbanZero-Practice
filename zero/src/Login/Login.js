import '../Login/Login.css';
import {Link} from 'react-router-dom';
import { Inputcss, Linkcss } from '../CSS/Css';

function Login(){
    return(
        <>
        <div className="loginWrapper">

        <h2 style={{marginBottom:'20px',fontSize:'25px',fontWeight:600}}>잔반제로에 로그인 하세요</h2>
        <input style={Inputcss} placeholder='ID'/>
        <input style={Inputcss} placeholder='Password'/>
        
        <div className='회원가입'>
        <h3>잔반제로 ID가 없으십니까?</h3>
        <Link to='/account' style={{...Linkcss,color:'#a5d1f4'}}>지금 만드세요</Link>
        </div>
    
        </div>
        </>
    )
}

export default Login;