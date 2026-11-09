import React from 'react'
import { Link, Outlet } from 'react-router-dom'

const DashboardLayout = () => {
    return (
        <div className='w-full h-screen flex '>

            <div className='w-[25%] shadow-xl border h-screen'>
                <h1 className='text-2xl font-bold ml-4 my-5'>Expense Tracker </h1>
                <div className='flex flex-col  ml-4 my-10 gap-4 text-xl font-semibold'>
                    <Link to={'/dashboard/overview'}>Overview</Link>
                    <Link to={'/dashboard/all-expense'}>All Expense</Link>
                    <Link to={'/dashboard/add-expense'}>Add Expense</Link>
                </div>

            </div>
            <div className='w-[75%] bg-gray-200 p-10'>
                hwloo
                <Outlet />
            </div>
        </div>
    )
}

export default DashboardLayout
