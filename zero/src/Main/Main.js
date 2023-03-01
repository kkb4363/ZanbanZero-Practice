import {useQuery} from '@tanstack/react-query';
import { getTest } from "../API/api";
import styled from 'styled-components';
import {makeImagePath} from '../UTIL/utils';
import {useNavigate,useMatch} from 'react-router-dom'
import {plusItem} from '../Redux/store';
import { useDispatch} from 'react-redux';
import { useState } from 'react';
import '../Main/Main.css'

const Wrapper = styled.div`
display:flex;
width:80%;
height:100%;
left:0;
right:0;
margin:10px auto;
justify-content:center;
align-items:center;
flex-direction:column;
`

const MainWrapper = styled.div`
display:flex;
justify-content:space-around;
width:1100px;
height:700px;
`

const 예약W = styled.div`
width:500px;
height:500px;
flex-direction:column;
justify-content:center;
align-items:center;
display:flex;
border: 1px solid black;
`

const 예약하기 = styled.div`
display:flex;
width:400px;
height:300px;
justify-content:space-between;
align-items:center;
button{
    width:150px;
    height:100px;
    border-radius:20px;
}
` 

const QR코드 = styled.div`
display:flex;
width:400px;
height:300px;
justify-content:space-between;
align-items:center;
margin-top:-50px;
button{
    width:150px;
    height:100px;
    border-radius:20px;
}
`

const 차트W = styled.div`
width:500px;
height:500px;
border:1px solid black;
display:flex;
flex-direction:column;
justify-content:space-between;
align-items:center;
`

const 차트제목 = styled.div`
display:flex;
font-size:18px;
font-weight:600;
margin-right:360px;
margin-top:10px;
`

const 차트 = styled.div`
display:flex;
background-color:tomato;
width:350px;
height:350px;
margin-top:50px;
`

const 차트비교 = styled.div`
display:flex;
margin-top:20px;
align-items:center;
width:300px;
height:200px;
flex-direction:column;
span{
    font-size:20px;
    font-weight:500;
}
`





function Main(){
    const navigate = useNavigate(),dispatch = useDispatch();
    const PathMatch = useMatch('/:id');

    const [item, setItem] = useState(5);

    const addItem = () => {
        dispatch(plusItem({
            id:item,
            name:`Test Item ${item}`,
            price:5000*item,
        }))
        setItem(prev => prev +1)
    }

    
    return(
        <>
            <Wrapper>
                <span style={{fontSize:'20px',fontWeight:600,margin:'20px 0px'}}>현재 1000명의 회원이 탄소중립 실천에 함께하고 있습니다.</span>
                <MainWrapper>
                    <예약W>
                        <예약하기>
                            <div style={{display:'flex', flexDirection:'column'}}>
                                <span>매일 2회 마감</span>
                                <span>오전 10:30 / 오후 2:30</span>
                            </div>
                            <div>
                                <button>예약하기</button>
                            </div>
                            
                        </예약하기>
                        <QR코드>
                            <div>
                                <span>예약하셨나요?</span>
                            </div>
                            <div>
                                <button>QR코드 확인</button>
                            </div>
                        </QR코드>
                    </예약W>

                    <차트W>
                        <차트제목>이번주 잔반량</차트제목>
                        <차트>
                            차트
                        </차트>
                        <차트비교>
                        <span>{`지난주 대비 0% 감소`}</span>
                        <span>{`0%의 탄소 감축 효과`}</span>
                        </차트비교>
                    </차트W>
                </MainWrapper>
            </Wrapper>
        </>
    )
}

export default Main;