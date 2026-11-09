import MainLayout from "../layout/MainLayout";
import Home from '../pages/Home'
import About from '../pages/About'
import Login from '../pages/Login'
import DashboardLayout from "../layout/DashboardLayout";
import Overview from "../pages/dashboard/Overview";
import AddExpense from "../pages/dashboard/AddExpense";
import AllExpense from "../pages/dashboard/AllExpense";


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
    },
    {
        path: '/dashboard',
        element: <DashboardLayout />,
        children: [
            {
                path: 'overview',
                element: <Overview />
            }, {
                path: 'add-expense',
                element: <AddExpense />
            }, {
                path :'all-expense',
                element : <AllExpense/>
            }

        ]
    }
]