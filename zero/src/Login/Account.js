import { useState } from 'react';
import '../Login/Account.css';
import axios from 'axios';
import {useNavigate} from 'react-router';
import {Link} from 'react-router-dom';

const 일반인api = `http://localhost:3000/users`; 

function Create(){
    const [ID, SetID] = useState(''), [Password,SetPW] = useState(''),[admin,Setadmin] = useState(false),[check, setCheck] = useState(false)
    const navigate = useNavigate();

    const onSubmit = (e) => {
        e.preventDefault();
        let body={ID,Password,admin}
        if(check === true){        //아이디 중복검사 했을시 
            // if(admin === true) {  // 사업자 회원가입
            //     axios.get(`${사업자api}`).then(res => { res.data.filter(api => api.ID === body.ID).length !== 0 ?
            //     alert('이미 있는 ID 입니다') : axios.post(`${사업자api}`,body).then(() => {
            //     alert('회원가입이 완료되었습니다.')
            //     navigate('/login')})})
            // }
            if(admin === false){  // 일반인 회원가입
                axios.get(`${일반인api}`).then(res => { res.data.filter(api => api.ID === body.ID).length !== 0 ?
                alert('이미 있는 ID 입니다') : axios.post(`${일반인api}`,body).then(() => {
                alert('회원가입이 완료되었습니다.')
                navigate('/login')})})
            }
        }
        if(check === false){       //아이디 중복검사 안 했을시   
            alert('ID 중복검사를 해주세요')
        }
    }
    const onCheck = (e) => {
        e.preventDefault();
        let body = {ID}
        axios.get(`${일반인api}`)
        .then(res => {
            res.data.filter(api => api.ID === body.ID).length !== 0 ?
            alert('이미 있는 ID 입니다!') : 
            alert('사용 가능한 ID 입니다!') 
            setCheck(true)
        })
    }
    const onAdmin = () => {
        Setadmin(true)
    }
    const onNotAdmin = () => {
        Setadmin(false)
    }

    return(
    <form className="AccountWrapper" onSubmit={onSubmit}>
    <h1>회원가입</h1>
    <div className='Account_input'>
        <div className='idcheck'>
            <input 
            required
            placeholder='ID'
            type='text'
            value={ID}
            onChange={e => SetID(e.target.value)}
            />
            <button type='button' onClick={(e)=> {
                SetID(e.target.previousElementSibling.value);
                onCheck(e)
                }}>ID중복확인</button>
        </div>
        
        <input 
        placeholder='암호'
        type='password'
        value={Password}
        onChange={e => SetPW(e.target.value)}
        required
        />
        {/* <input placeholder='암호확인'/> */}
        
        <div className='admin_div'>
            <label htmlFor='notadmin'>일반인</label>
            <input style={{marginRight:'30px'}} id='notadmin' type='checkbox' checked={admin? false : true} onClick={onNotAdmin}/>
            <label htmlFor='admin'>사업자</label>
            <input id='admin' type='checkbox' checked={admin? true : false} onClick={onAdmin}/>
        </div>
    </div>

    <Link to='/login'>뒤로가기</Link>
    <button className='button'>완료</button>
    
    </form>
    )
}

export default Create;