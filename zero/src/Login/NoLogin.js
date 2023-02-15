import '../Login/NoLogin.css';
import {Link} from 'react-router-dom';
import { Inputcss, Linkcss } from '../CSS/Css';
import { useState } from 'react';
import axios from "axios";
import { useDispatch } from 'react-redux';
import { loginUser } from '../Redux/store';

const api주소 = `http://localhost:3000/users`;

function Login(){
    const [Msg,setMsg]=useState(''),[ID,SetID] = useState(''), [PW,SetPW] = useState('');
    const dispatch = useDispatch();
    
    const onSubmit = (e) => {
        e.preventDefault();
        let body = {ID,PW}
        axios.get(`${api주소}`)
        .then(
            res => res.data.filter(i => i.ID === body.ID) !=='' ? 
            res.data.filter(i => i.ID === body.ID)[0].Password === body.PW ?
            axios.post(`${api주소}`,body)
            .then(rs => {dispatch(loginUser(rs.data))})
            :setMsg('비밀번호가 다릅니다')
            :setMsg('ID or PW를 확인해주세요')
        )
        
    }

    return(
        <>
        <form className="loginWrapper" onSubmit={onSubmit}>
            <h2 style={{marginBottom:'20px',fontSize:'25px',fontWeight:600}}>잔반제로에 로그인 하세요</h2>
            <input 
            style={Inputcss} 
            placeholder='ID'
            type='text'
            onChange={e => SetID(e.target.value)}
            />
            <input 
            style={Inputcss} 
            placeholder='Password'
            type='password'
            onChange={e => SetPW(e.target.value)}
            />
            <button type='submit'>Login</button>
            {Msg}
            <div className='회원가입'>
            <h3>잔반제로 ID가 없으십니까?</h3>
            <Link to='/account' style={{...Linkcss,color:'#a5d1f4',marginTop:'50px'}}>지금 만드세요</Link>
            </div>
        </form>
        </>
        
    )
}

export default Login;