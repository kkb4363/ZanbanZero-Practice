import {configureStore, createSlice} from '@reduxjs/toolkit';

const items = createSlice({
    name:'items',
    initialState:[{
        id:0,
        name:'복숭아 아이스티',
        price:13000,
        amount:1
    },{
        id:1,
        name:'러블리 티 박스',
        price:20000,
        amount:1
    },{
        id: 2,
        name: '그린티 랑드샤 세트',
        price: 36000,
        amount: 1,
    },{
        id:3,
        name:'아이스티 샷 추가',
        price: 16000,
        amount:1,
    }],
    reducers:{
        addCount(state,action){
            let num = state.findIndex(a => a.id === action.payload);
            state[num].amount++;
        },
        minusCount(state,action){
            let num = state.findIndex(a => a.id === action.payload);
            if(state[num].amount >1) state[num].amount--;
        },
        deleteItem(state,action){
            action.payload.remove();
        },
        plusItem(state,action){
            const newItem = action.payload;
            state.push({
                id:newItem.id,
                name:newItem.name,
                price:newItem.price,
                amount:1
            }) 
        }
    }
}) 

const User = createSlice({
    name:'User',
    initialState:{
        ID:'',
        Password:'',
        isLogin:false,
        admin:false
    },
    reducers:{
        loginUser(state,action){
            state.ID = action.payload.ID;
            state.Password = action.payload.PW;
            state.isLogin = true;
            state.admin = action.payload.admin;
        },
        logoutUser(state){
            state.ID='';
            state.Password='';
            state.isLogin=false;
        }
    }
})


export const {addCount,minusCount,deleteItem,plusItem} = items.actions
export const {loginUser,logoutUser} = User.actions;

export default configureStore({
    reducer:{
        items:items.reducer,
        User:User.reducer
    }
})