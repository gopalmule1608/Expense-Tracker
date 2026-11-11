
import React from 'react'
import { Link, Outlet, useLocation } from 'react-router-dom'
import {
    LayoutDashboard,
    ReceiptText,
    PlusCircle,
    Wallet,
    Settings,
    LogOut
} from 'lucide-react'

const DashboardLayout = () => {

    const location = useLocation()

    const navLinks = [
        {
            name: 'Overview',
            path: '/dashboard/overview',
            icon: LayoutDashboard
        },
        {
            name: 'All Expenses',
            path: '/dashboard/all-expense',
            icon: ReceiptText
        },
        {
            name: 'Add Expense',
            path: '/dashboard/add-expense',
            icon: PlusCircle
        }
    ]

    return (
        <div className='w-full min-h-screen flex bg-slate-100'>

            {/* Sidebar */}
            <aside className='w-[260px] min-h-screen bg-[#111827] text-white flex flex-col shadow-xl'>

                {/* Logo */}
                <div className='px-6 py-7 border-b border-gray-700'>
                    <h1 className='text-2xl font-bold tracking-wide'>
                        Expense<span className='text-blue-500'>Tracker.</span>
                    </h1>
                    <p className='text-gray-400 text-xs mt-2'>
                        Manage your money smarter
                    </p>
                </div>

                {/* Navigation */}
                <div className='px-4 py-8 flex-1'>

                    <p className='text-xs font-semibold text-gray-500 uppercase tracking-widest mb-5 px-3'>
                        Menu
                    </p>

                    <nav className='flex flex-col gap-2'>

                        {navLinks.map((item) => {
                            const Icon = item.icon

                            const isActive = location.pathname === item.path

                            return (
                                <Link
                                    key={item.name}
                                    to={item.path}
                                    className={`flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-300 ${isActive
                                            ? 'bg-blue-600 text-white shadow-lg shadow-blue-600/20'
                                            : 'text-gray-400 hover:bg-gray-800 hover:text-white'
                                        }`}
                                >
                                    <Icon size={20} />
                                    <span className='font-medium text-sm'>
                                        {item.name}
                                    </span>
                                </Link>
                            )
                        })}

                    </nav>

                    <p className='text-xs font-semibold text-gray-500 uppercase tracking-widest mt-10 mb-5 px-3'>
                        Preferences
                    </p>

                    <Link
                        to='/dashboard/settings'
                        className='flex items-center gap-3 px-4 py-3 rounded-xl text-gray-400 hover:bg-gray-800 hover:text-white transition-all'
                    >
                        <Settings size={20} />
                        <span className='font-medium text-sm'>Settings</span>
                    </Link>

                </div>

                {/* Bottom */}
                <div className='p-4 border-t border-gray-700'>
                    <div className='bg-gray-800 rounded-xl p-4 mb-4'>
                        <div className='flex items-center gap-3'>
                            <div className='w-10 h-10 rounded-full bg-blue-600 flex items-center justify-center font-bold'>
                                U
                            </div>
                            <div>
                                <h3 className='text-sm font-semibold'>My Account</h3>
                                <p className='text-xs text-gray-400'>Personal Account</p>
                            </div>
                        </div>
                    </div>

                    <button className='w-full flex items-center gap-3 px-4 py-3 text-gray-400 hover:text-red-400 transition'>
                        <LogOut size={19} />
                        <span className='text-sm font-medium'>Logout</span>
                    </button>
                </div>

            </aside>

            {/* Main Content */}
            <main className='flex-1 min-w-0 flex flex-col'>

                {/* Header */}
                <header className='h-[75px] bg-white border-b border-slate-200 flex items-center justify-between px-8 sticky top-0 z-10'>
                    <div>
                        <h2 className='text-xl font-bold text-slate-800'>
                            Dashboard
                        </h2>
                        <p className='text-xs text-slate-500 mt-1'>
                            Welcome back! Manage your finances.
                        </p>
                    </div>

                    <div className='flex items-center gap-3'>
                        <div className='w-10 h-10 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center font-bold'>
                            U
                        </div>
                    </div>
                </header>

                {/* Page Content */}
                <section className='p-8 flex-1 overflow-y-auto'>
                    <Outlet />
                </section>

            </main>

        </div>
    )
}

export default DashboardLayout
