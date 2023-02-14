import {createBrowserRouter} from 'react-router-dom';
import App from '../App';
import Account from '../Login/Account';
import LoginMain from '../Login/LoginMain';
import Main from '../Main/Main';
import Market from '../Market/Market';

const router = createBrowserRouter([
    {
        path:'',
        element:<App/>,
        children:[
            {
                path:`${process.env.PUBLIC_URL}/`,
                element:<Main/>,   
            },
            {
                path:'/login',
                element:<LoginMain/>
            },
            {
                path:'/account',
                element:<Account/>
            },
            {
                path:'/market',
                element:<Market/>
            }
        ]
    }
])

export default router;