import {createBrowserRouter} from 'react-router-dom';
import App from '../App';
import Account from '../Login/Account';
import Login from '../Login/Login';
import Main from '../Main/Main';
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
                element:<Login/>
            },
            {
                path:'/account',
                element:<Account/>
            }
        ]
    }
])

export default router;