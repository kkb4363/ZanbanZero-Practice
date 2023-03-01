import '../Login/NoLogin.css';
import {Link, useNavigate} from 'react-router-dom';
import { Inputcss, Linkcss } from '../CSS/Css';
import { useState } from 'react';
import axios from "axios";
import { useDispatch } from 'react-redux';
import { loginUser } from '../Redux/store';
import styled from 'styled-components';



const 일반관리자체크박스W = styled.div`
display:flex;
justify-content:space-between;
align-items:center;
width:260px;
height:30px;
`

const 일반관리자체크박스 = styled.div`
display:flex;
justify-content:center;
align-items:center;
input{
    margin-left:-12px;
    margin-right:-10px;
    width:50px;
    height:20px;
}
`


const 일반인api = `http://localhost:3000/users`;

function Login(){
    const [ID,SetID] = useState(''), [PW,SetPW] = useState(''),[admin,Setadmin]=useState(false);
    const dispatch = useDispatch();
    const nav = useNavigate();

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

    const goaccount = () => {
        nav('/account')
    }

    return(
        <>
        <form className="loginWrapper" onSubmit={onSubmit}>
            <h2 style={{marginBottom:'20px',fontSize:'25px',fontWeight:600}}>잔반제로에 로그인 하세요</h2>
            <일반관리자체크박스W>
                <일반관리자체크박스>
                    <input id='notadmin' type='checkbox' checked={admin? false : true} onClick={onNotAdmin}/>
                    <label htmlFor='notadmin'>일반</label>
                </일반관리자체크박스>
                <일반관리자체크박스>
                    <input id='admin' type='checkbox' checked={admin? true : false} onClick={onAdmin}/>
                    <label htmlFor='admin'>관리자</label>
                </일반관리자체크박스>
            </일반관리자체크박스W>
            
            
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
            <div className='buttoncss'>
            {/* # form 안에 button이 있을때 자동으로 submit되는 현상 막기
            - <button type='button'></button>
            - 이런식으로 버튼에 타입을 주면 된다 */}
            <button style={{marginBottom:'10px'}} onClick={goaccount} type='button'>회원가입</button>
            <button style={{marginBottom:'10px'}} type='submit'>로그인</button>
            </div>
            
            
            {/* <div className='회원가입'>
            <h3>잔반제로 ID가 없으십니까?</h3>
            <Link to='/account' style={{...Linkcss,color:'#a5d1f4',marginTop:'50px'}}>지금 만드세요</Link>
            </div> */}
        </form>
        </>
        
    )
}

export default Login;