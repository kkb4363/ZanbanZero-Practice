import '../Login/NoLogin.css';
import {Link} from 'react-router-dom';
import { Inputcss, Linkcss } from '../CSS/Css';
import { useState } from 'react';
import axios from "axios";
import { useDispatch } from 'react-redux';
import { loginUser } from '../Redux/store';

const 일반인api = `http://localhost:3000/users`;

function Login(){
    const [ID,SetID] = useState(''), [PW,SetPW] = useState(''),[admin,Setadmin]=useState(false);
    const dispatch = useDispatch();

    const onSubmit = (e) => {
        e.preventDefault();
        let body = {ID,PW,admin}
        if(admin === false){
            axios.get(`${일반인api}`).then(res => res.data.filter(i => i.ID === body.ID).length !== 0 ? 
            res.data.filter(i => i.ID === body.ID)[0].Password === body.PW ?
            res.data.filter(api => api.ID === body.ID)[0].admin === false ?
            axios.post(`${일반인api}`,body)
            .then(rs => {dispatch(loginUser(rs.data))})
            :alert('사업자용 계정입니다')
            :alert('비밀번호가 다릅니다')
            :alert('ID를 확인해주세요')
        )}
        // if(admin === true){ //사업자 
        //     axios.get(`${사업자api}`).then(res => res.data.filter(i => i.ID === body.ID).length !== 0 ? 
        //     res.data.filter(i => i.ID === body.ID)[0].Password === body.PW ?
        //     res.data.filter(api => api.ID === body.ID)[0].Admin === true ?
        //     axios.post(`${사업자api}`,body)
        //     .then(rs => {dispatch(loginUser(rs.data))})
        //     :alert('일반인 계정입니다')
        //     :alert('비밀번호가 다릅니다')
        //     :alert('ID를 확인해주세요')
        // )}
    }

    const onAdmin = () => {
        Setadmin(true)
    }

    const onNotAdmin = () => {
        Setadmin(false)
    }
    return(
        <>
        <form className="loginWrapper" onSubmit={onSubmit}>
            <h2 style={{marginBottom:'20px',fontSize:'25px',fontWeight:600}}>잔반제로에 로그인 하세요</h2>
            <div className='admin_notadmin'>
                <label htmlFor='notadmin'>일반인</label>
                <input id='notadmin' type='checkbox' checked={admin? false : true} onClick={onNotAdmin}/>
                <label htmlFor='admin'>사업자</label>
                <input id='admin' type='checkbox' checked={admin? true : false} onClick={onAdmin}/>
            </div>
            
            
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
            <button style={{marginBottom:'10px'}} type='submit'>Login</button>
            
            <div className='회원가입'>
            <h3>잔반제로 ID가 없으십니까?</h3>
            <Link to='/account' style={{...Linkcss,color:'#a5d1f4',marginTop:'50px'}}>지금 만드세요</Link>
            </div>
        </form>
        </>
        
    )
}

export default Login;