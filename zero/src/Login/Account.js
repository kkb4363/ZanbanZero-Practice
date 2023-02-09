import '../Login/Account.css';


function Create(){
    return(
    <div className="AccountWrapper">
    <h1>회원가입</h1>
    
    <div className='Account_input'>
        <input placeholder='ID'/>
        <span>사용하실 ID를 입력해주세요</span>
        <input placeholder='암호'/>
        <input placeholder='암호확인'/>
    </div>

    <button className='button'>완료</button>
    
    </div>
    )
}

export default Create;