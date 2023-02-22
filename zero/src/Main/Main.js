import {useQuery} from '@tanstack/react-query';
import { get음식점,getTest } from "../API/api";
import styled from 'styled-components';
import {makeImagePath} from '../UTIL/utils';
import {useNavigate,useMatch} from 'react-router-dom'


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
    const navigate = useNavigate();
    const PathMatch = useMatch('/:id');
    const ShopPathMatch = PathMatch?.params.id && data.results.find(shop => shop.id+'' === PathMatch?.params.id)

    const onBox = (id) => {
        navigate(`/${id}`)
        console.log(ShopPathMatch)
    }


    
    return(
        <>
            {isLoading ? <>Loading...</> 
            :<Wrapper>
                {ShopPathMatch ?
                <>
                {ShopPathMatch.title} 페이지 입니다! 
                {/* 아직 css는 안함. */}
                </>
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