import '../Market/Market.css';
import {useSelector, useDispatch} from 'react-redux';
import {addCount, minusCount, deleteItem} from '../Redux/store';
import { useState } from 'react';
import { BsXLg } from "react-icons/bs";

function Market(){
    const [checkItems, setCheckItems] = useState([]),dispatch = useDispatch(),[isdelete,setIsdelete] = useState([]);
    const items = useSelector(state => state.items);
    const onSingle = (checked, id) => {
        if(checked){
            setCheckItems(prev => [...prev,id]);
        }
        else setCheckItems(checkItems.filter(el => el!==id));
    }
    const onEvery = (checked) => {
        if(checked){
            if(isdelete.length !==0){               
                const Array = [];
                const filteritems = [...items]
                let test = [];
                test = filteritems.filter(x => !isdelete.includes(x.id))
                test.map(a => Array.push(a.id))
                setCheckItems(Array)
            }
            else{
                const Array = [];
                items.map(el => Array.push(el.id));
                setCheckItems(Array);
            }   
        }
        else setCheckItems([]);
    }
    const Price = items.map(a => {
        return checkItems.includes(a.id)? Object.values(a)[2] * a.amount : null
    })
    const TotalPrice = Price.reduce((a,b) => a+b)

    

    return(
        <>
        <h1 className='title'>장바구니</h1>
        <hr style={{height:'3px', backgroundColor:'black'}}/>

        <div className='item_Wrapper'>
            <div className='item_list'>
                <div className='item_list_Every'>
                    <div>
                        <input 
                        type='checkbox' 
                        onChange={(e) => onEvery(e.target.checked)}
                        checked={
                            isdelete.length !== 0 ? checkItems.length === items.length - isdelete.length ? true : false :
                            checkItems.length === items.length ? true : false}/>
                        <h2>전체선택</h2>
                    </div>
                    <div>
                        <div>선택삭제</div>
                    </div>
                </div>


                <hr style={{margin:'20px 0px', backgroundColor:'black', height:'1px'}}/>

            
                {items.map((a,i) => {
                    return <div key={i}>
                                <div className='item_list_items_wrapper'>
                                    <div className='checkbox'>
                                        <input 
                                        checked={checkItems.includes(a.id)? true:false}
                                        onChange={e => onSingle(e.target.checked, a.id)}
                                        type='checkbox'/>
                                    </div>
                                    <div className='name'>
                                        {a.name}
                                    </div>
                                    <div className='quantity'>
                                        <button onClick={() => dispatch(minusCount(a.id))}>-</button>
                                        {a.amount}
                                        <button onClick={() => dispatch(addCount(a.id))}>+</button>
                                    </div>
                                    <div className='price'>
                                        <span>
                                            {a.price*a.amount+'원'}
                                        </span>
                                    </div>
                                    <div className='deleteItem' >
                                        <BsXLg onClick={e => {
                                        setCheckItems(checkItems.filter(el => el !== a.id))
                                        setIsdelete(el => [...el, a.id])
                                        dispatch(deleteItem(e.target.parentElement.parentElement.parentElement))}}/>
                                    </div>
                                </div>
                                <hr/>
                            </div>})}

            </div>

            <div className='item_buy'>
                <div className='item_buy_div' style={{marginTop:'20px'}}>
                    <h3>상품 금액</h3>
                    <span>+{TotalPrice}원</span>
                </div>
                <div className='item_buy_div'>
                    <h3>상품 할인</h3>
                    <span style={{color:'red'}}>-0원</span>
                </div>
                <div className='item_buy_div'>
                    <h3>배송비</h3>
                    <span>+0원</span>
                </div>
                <hr style={{marginTop:'50px'}}/>
                <div className='item_buy_결제예상'>
                    <h3>결제 예상 금액</h3>
                    <span>{TotalPrice}원</span>
                </div>
                <div className='item_buy_주문하기'>{TotalPrice}원 주문하기</div>
            </div>
        </div>
        </>
    )
}

export default Market;