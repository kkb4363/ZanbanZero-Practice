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
display:grid;
gap:10px;
grid-template-columns:repeat(4,1fr);
width:80%;
left:0;
right:0;
margin:10px auto;
`

const Box = styled.div`
background-color:white;
height:300px;
font-size:33px;
color:white;
display:flex;
justify-content:center;
background-size:cover;
background-position:center center;
background-image:url(${props => props.bgPhoto})
`


function Main(){
    const {data, isLoading} = useQuery(['Test'],getTest);
    const navigate = useNavigate(),dispatch = useDispatch();
    const PathMatch = useMatch('/:id');
    const ShopPathMatch = PathMatch?.params.id && data.results.find(shop => shop.id+'' === PathMatch?.params.id)

    const [item, setItem] = useState(5);


    const onBox = (id) => {
        navigate(`/${id}`)
    }

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
            {isLoading ? <>Loading...</> 
            :<Wrapper>
                {ShopPathMatch ?
                <div className='ShopWrapper'>
                    <span>{ShopPathMatch.title} 페이지 입니다! </span>
                
                    <div className='Shop_item'>
                        <span>item {item}</span>
                        <button onClick={addItem}>장바구니에 추가하기</button>
                    </div>
                </div>
                : 
                data.results.map(test => 
                    <Box 
                    onClick={() => onBox(test.id)}
                    key={test.id}
                    bgPhoto={makeImagePath(test.backdrop_path,'w400')}
                    >
                    {test.title}
                    </Box>
                    )
                }
                
            </Wrapper>}
        </>
    )
}

export default Main;