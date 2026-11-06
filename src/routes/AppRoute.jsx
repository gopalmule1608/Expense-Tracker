import MainLayout from "../layout/MainLayout";
import Home from '../pages/Home'
import About from '../pages/About'
import Login from '../pages/Login'


export const routes = [
    {
        path: '/',
        element: <MainLayout />,
        children: [
            {
                path: '/',
                element: <Home />
            },
            {
                path: '/about',
                element: <About />
            }
        ]
    },
    {
        path: '/login',
        element: <Login />
    }
]