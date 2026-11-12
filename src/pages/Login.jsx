
import React, { useContext, useState } from 'react'
import { authShop } from '../context/AuthContext'
import { useForm } from 'react-hook-form'
import { useNavigate, Link } from 'react-router-dom'

const Login = () => {
    const { setUser } = useContext(authShop)
    const navigate = useNavigate()
    const [showPassword, setShowPassword] = useState(false)

    const {
        register,
        handleSubmit,
        formState: { errors }
    } = useForm()

    function handleData(data) {
        // Frontend-only demo login
        const userData = {
            email: data.email
        }

        setUser(userData)
        localStorage.setItem('expenseUser', JSON.stringify(userData))
        navigate('/dashboard')
    }

    return (
        <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4 md:p-8">

            <div className="w-full max-w-6xl min-h-[650px] bg-white rounded-3xl shadow-2xl overflow-hidden grid md:grid-cols-2">

                {/* LEFT SIDE */}
                <div className="hidden md:flex flex-col justify-between bg-gray-950 text-white p-12 relative overflow-hidden">

                    <div className="absolute w-80 h-80 bg-orange-500/20 blur-[100px] rounded-full -top-20 -left-20"></div>
                    <div className="absolute w-80 h-80 bg-blue-500/10 blur-[100px] rounded-full bottom-0 right-0"></div>

                    <div className="relative z-10">
                        <Link to="/" className="text-2xl font-extrabold tracking-tight">
                            Expense<span className="text-orange-500">Tracker.</span>
                        </Link>

                        <div className="mt-24">
                            <span className="bg-orange-500/10 text-orange-400 border border-orange-500/20 px-4 py-2 rounded-full text-sm">
                                Smart Finance Management
                            </span>

                            <h1 className="text-5xl font-bold leading-tight mt-8">
                                Your Money.
                                <br />
                                Your Control.
                                <br />
                                <span className="text-orange-500">
                                    Your Future.
                                </span>
                            </h1>

                            <p className="text-gray-400 mt-6 leading-relaxed max-w-sm">
                                Take control of your financial journey.
                                Track expenses, understand your spending
                                and build better money habits.
                            </p>
                        </div>
                    </div>

                    {/* Financial Card */}
                    <div className="relative z-10 bg-white/5 border border-white/10 backdrop-blur-xl rounded-2xl p-6 mt-12">

                        <div className="flex justify-between items-center">
                            <p className="text-gray-400 text-sm">
                                Your financial journey
                            </p>
                            <span className="text-orange-400">✦</span>
                        </div>

                        <div className="flex items-center justify-between mt-5">
                            <div>
                                <h3 className="text-2xl font-bold">
                                    Track Every Rupee
                                </h3>
                                <p className="text-gray-400 text-sm mt-2">
                                    Spend smarter, live better.
                                </p>
                            </div>

                            <div className="text-5xl">💰</div>
                        </div>
                    </div>

                    <p className="relative z-10 text-gray-500 text-xs mt-8">
                        © 2026 Expense Tracker. All rights reserved.
                    </p>
                </div>

                {/* RIGHT SIDE */}
                <div className="flex items-center justify-center p-6 sm:p-12 lg:p-16">

                    <div className="w-full max-w-md">

                        {/* Mobile Logo */}
                        <Link to="/" className="md:hidden text-2xl font-extrabold text-gray-900">
                            Expense<span className="text-orange-500">Tracker.</span>
                        </Link>

                        <div className="mt-8 md:mt-0">

                            <div className="w-14 h-14 bg-orange-100 rounded-2xl flex items-center justify-center text-2xl mb-7">
                                👋
                            </div>

                            <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900">
                                Welcome Back!
                            </h2>

                            <p className="text-gray-500 mt-3">
                                Enter your details to access your account.
                            </p>

                            <form
                                onSubmit={handleSubmit(handleData)}
                                className="mt-9 space-y-6"
                            >

                                {/* Email */}
                                <div>
                                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                                        Email Address
                                    </label>

                                    <input
                                        type="email"
                                        placeholder="name@example.com"
                                        {...register('email', {
                                            required: 'Email is required',
                                            pattern: {
                                                value: /^\S+@\S+\.\S+$/,
                                                message: 'Enter a valid email'
                                            }
                                        })}
                                        className="w-full px-4 py-3.5 rounded-xl border border-gray-200 outline-none focus:border-orange-500 focus:ring-4 focus:ring-orange-500/10 transition"
                                    />

                                    {errors.email && (
                                        <p className="text-red-500 text-xs mt-2">
                                            {errors.email.message}
                                        </p>
                                    )}
                                </div>

                                {/* Password */}
                                <div>
                                    <div className="flex justify-between mb-2">
                                        <label className="text-sm font-semibold text-gray-700">
                                            Password
                                        </label>
                                    </div>

                                    <div className="relative">
                                        <input
                                            type={showPassword ? 'text' : 'password'}
                                            placeholder="Enter your password"
                                            {...register('password', {
                                                required: 'Password is required',
                                                minLength: {
                                                    value: 6,
                                                    message: 'Minimum 6 characters required'
                                                }
                                            })}
                                            className="w-full px-4 py-3.5 pr-16 rounded-xl border border-gray-200 outline-none focus:border-orange-500 focus:ring-4 focus:ring-orange-500/10 transition"
                                        />

                                        <button
                                            type="button"
                                            onClick={() => setShowPassword(!showPassword)}
                                            className="absolute right-4 top-1/2 -translate-y-1/2 text-sm font-semibold text-orange-500"
                                        >
                                            {showPassword ? 'Hide' : 'Show'}
                                        </button>
                                    </div>

                                    {errors.password && (
                                        <p className="text-red-500 text-xs mt-2">
                                            {errors.password.message}
                                        </p>
                                    )}
                                </div>

                                {/* Login Button */}
                                <button
                                    type="submit"
                                    className="w-full bg-orange-500 hover:bg-orange-600 text-white font-bold py-4 rounded-xl shadow-lg shadow-orange-200 transition-all duration-300 hover:-translate-y-1"
                                >
                                    Sign In →
                                </button>

                            </form>

                            <div className="flex items-center gap-4 my-8">
                                <div className="h-px bg-gray-200 flex-1"></div>
                                <span className="text-gray-400 text-xs">
                                    NEW TO EXPENSE TRACKER?
                                </span>
                                <div className="h-px bg-gray-200 flex-1"></div>
                            </div>

                           

                            <p className="text-center text-xs text-gray-400 mt-10">
                                By continuing, you agree to our Terms & Privacy Policy.
                            </p>

                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Login
