import { useState } from 'react';
import '../Login/Account.css';
import axios from 'axios';
import {useNavigate} from 'react-router';
import {Link} from 'react-router-dom';

const api주소 = `http://localhost:3000/users`; 

function Create(){
    const [ID, SetID] = useState(''), [Password,SetPW] = useState(''), [Msg,SetMsg] = useState('')
    const navigate = useNavigate();

    const onSubmit = (e) => {
        e.preventDefault();
        let body={ID,Password}
        axios.get(`${api주소}`)
        .then(res => {
            console.log(res.data)
            res.data.filter(i => i.ID === body.ID) !== '' ?
            SetMsg('이미 있는 ID 입니다')
            :
            console.log('서공')
            axios.post(`${api주소}`,body)
            .then(() => {navigate('/login')})
        })
    }

    return(
    <form className="AccountWrapper" onSubmit={onSubmit}>
    <h1>회원가입</h1>
    
    <div className='Account_input'>
        <input 
        placeholder='ID'
        type='text'
        value={ID}
        onChange={e => SetID(e.target.value)}
        />
        <span>{Msg === '' ? '사용하실 ID를 입력해주세요' : Msg}</span>
        <input 
        placeholder='암호'
        type='password'
        value={Password}
        onChange={e => SetPW(e.target.value)}
        />
        {/* <input placeholder='암호확인'/> */}
        
    </div>

    <Link to='/login'>뒤로가기</Link>
    <button type='submit' className='button'>완료</button>
    
    </form>
    )
}

export default Create;