import {useQuery} from '@tanstack/react-query';
import { getTest } from "../API/api";
import styled from 'styled-components';
import {makeImagePath} from '../UTIL/utils';


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
background-size:cover;
background-position:center center;
font-size:33px;
color:white;
display:flex;
justify-content:center;
background-image:url(${props => props.bgPhoto})
`


function Main(){
    const {data, isLoading} = useQuery(['Test'],getTest);
    
    return(
        <>
            {isLoading ? <>Loading...</> 
            :<Wrapper>
                {data.results.map(test => 
                    <Box 
                    key={test.id}
                    bgPhoto={makeImagePath(test.backdrop_path, 'w500' || '')}
                    >
                    {test.title}
                    </Box>
                    )}
            </Wrapper>}
        </>
    )
}

export default Main;