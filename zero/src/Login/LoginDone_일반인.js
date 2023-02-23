import { useDispatch, useSelector } from 'react-redux';
import '../Login/LoginDone_일반인.css';


function LoginDone_일반인(){
    const User = useSelector(state => state.User);
    return(
    
    <div className='Wrapper'>
        
        <div className='LoginWrapper'>
        <h1>일반 사용자 입니다.</h1>
        <p>{User.ID}님 안녕하세요</p>
        
        </div>

        <div className='itemsWrapper'>
            <h1>주문 내역</h1>
            
        </div>
    
    </div>
    
    )
}

export default LoginDone_일반인;