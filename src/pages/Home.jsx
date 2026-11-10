
import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
    const features = [
        {
            icon: '💰',
            title: 'Track Expenses',
            description: 'Record and manage your daily expenses in one organized place.'
        },
        {
            icon: '📊',
            title: 'Visual Analytics',
            description: 'Understand your spending habits through easy-to-read summaries.'
        },
        {
            icon: '🎯',
            title: 'Manage Budget',
            description: 'Set spending limits and stay in control of your finances.'
        },
        {
            icon: '📅',
            title: 'Transaction History',
            description: 'View and manage all your income and expense records.'
        }
    ]

    return (
        <main className="bg-white">

            {/* Hero Section */}
            <section className="bg-gradient-to-br from-orange-50 via-white to-orange-100 px-6 py-20 md:py-28">
                <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-14 items-center">

                    <div>
                        <span className="inline-block bg-orange-100 text-orange-600 px-4 py-2 rounded-full text-sm font-semibold mb-6">
                            Smart Personal Finance Management
                        </span>

                        <h1 className="text-4xl md:text-6xl font-extrabold text-gray-900 leading-tight">
                            Take Control of
                            <span className="text-orange-500"> Your Money.</span>
                        </h1>

                        <p className="text-gray-600 text-lg mt-6 leading-relaxed max-w-lg">
                            Manage your daily expenses, track your income,
                            monitor your spending habits and make smarter
                            financial decisions with Expense Tracker.
                        </p>

                        <div className="flex flex-wrap gap-4 mt-8">
                            <Link
                                to="/register"
                                className="bg-orange-500 hover:bg-orange-600 text-white px-7 py-3.5 rounded-xl font-semibold shadow-lg shadow-orange-200 transition duration-300"
                            >
                                Get Started →
                            </Link>

                            <Link
                                to="/login"
                                className="border border-gray-300 hover:border-orange-500 text-gray-800 px-7 py-3.5 rounded-xl font-semibold transition duration-300"
                            >
                                Login
                            </Link>
                        </div>

                        <p className="text-sm text-gray-500 mt-6">
                            Simple • Organized • Easy to Use
                        </p>
                    </div>

                    {/* Dashboard Preview */}
                    <div className="bg-white rounded-3xl shadow-2xl shadow-orange-100 border border-gray-100 p-6 md:p-8">

                        <div className="flex justify-between items-center mb-8">
                            <div>
                                <p className="text-gray-500 text-sm">Dashboard Preview</p>
                                <h2 className="text-xl font-bold text-gray-900">
                                    Financial Overview
                                </h2>
                            </div>

                            <div className="bg-orange-100 p-3 rounded-xl text-2xl">
                                💳
                            </div>
                        </div>

                        <div className="bg-gray-900 rounded-2xl p-6 text-white">
                            <p className="text-gray-300 text-sm">
                                Sample Total Balance
                            </p>
                            <h2 className="text-3xl font-bold mt-2">
                                ₹45,800
                            </h2>
                            <p className="text-gray-400 text-xs mt-2">
                                Illustrative demo data
                            </p>
                        </div>

                        <div className="grid grid-cols-2 gap-4 mt-5">

                            <div className="bg-green-50 p-5 rounded-2xl">
                                <p className="text-gray-500 text-sm">Income</p>
                                <h3 className="text-xl font-bold text-green-600 mt-2">
                                    ₹60,000
                                </h3>
                                <span className="text-xs text-gray-500">
                                    Sample amount
                                </span>
                            </div>

                            <div className="bg-red-50 p-5 rounded-2xl">
                                <p className="text-gray-500 text-sm">Expenses</p>
                                <h3 className="text-xl font-bold text-red-500 mt-2">
                                    ₹14,200
                                </h3>
                                <span className="text-xs text-gray-500">
                                    Sample amount
                                </span>
                            </div>

                        </div>

                        <div className="mt-6">
                            <div className="flex justify-between mb-3">
                                <h3 className="font-bold text-gray-800">
                                    Recent Activity
                                </h3>
                                <span className="text-xs text-gray-400">
                                    Demo
                                </span>
                            </div>

                            {[
                                { icon: '🛒', name: 'Shopping', amount: '- ₹2,500' },
                                { icon: '🍔', name: 'Food & Dining', amount: '- ₹800' },
                                { icon: '💼', name: 'Salary', amount: '+ ₹30,000' }
                            ].map((item, index) => (
                                <div
                                    key={index}
                                    className="flex justify-between items-center py-3 border-b border-gray-100 last:border-0"
                                >
                                    <div className="flex items-center gap-3">
                                        <div className="bg-gray-100 p-2 rounded-lg">
                                            {item.icon}
                                        </div>
                                        <span className="font-medium text-gray-700 text-sm">
                                            {item.name}
                                        </span>
                                    </div>

                                    <span className={`font-semibold text-sm ${
                                        item.amount.startsWith('+')
                                            ? 'text-green-600'
                                            : 'text-red-500'
                                    }`}>
                                        {item.amount}
                                    </span>
                                </div>
                            ))}
                        </div>

                    </div>
                </div>
            </section>

            {/* Features Section */}
            <section className="py-20 px-6">
                <div className="max-w-7xl mx-auto">

                    <div className="text-center max-w-2xl mx-auto mb-14">
                        <span className="text-orange-500 font-semibold">
                            FEATURES
                        </span>

                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-3">
                            Everything You Need to Manage Money
                        </h2>

                        <p className="text-gray-500 mt-4">
                            Manage your personal finances with simple and
                            powerful expense management tools.
                        </p>
                    </div>

                    <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
                        {features.map((feature, index) => (
                            <div
                                key={index}
                                className="p-7 rounded-2xl border border-gray-100 hover:border-orange-200 hover:shadow-xl hover:-translate-y-2 transition-all duration-300"
                            >
                                <div className="w-14 h-14 bg-orange-50 rounded-2xl flex items-center justify-center text-3xl">
                                    {feature.icon}
                                </div>

                                <h3 className="text-xl font-bold text-gray-900 mt-6">
                                    {feature.title}
                                </h3>

                                <p className="text-gray-500 text-sm leading-relaxed mt-3">
                                    {feature.description}
                                </p>
                            </div>
                        ))}
                    </div>

                </div>
            </section>

            {/* How It Works */}
            <section className="bg-gray-50 py-20 px-6">
                <div className="max-w-6xl mx-auto">

                    <div className="text-center mb-14">
                        <span className="text-orange-500 font-semibold">
                            HOW IT WORKS
                        </span>

                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-3">
                            Start Managing Your Money in 3 Steps
                        </h2>
                    </div>

                    <div className="grid md:grid-cols-3 gap-10">

                        {[
                            {
                                number: '01',
                                title: 'Create Account',
                                description: 'Sign up and create your personal account.'
                            },
                            {
                                number: '02',
                                title: 'Add Transactions',
                                description: 'Record your income and daily expenses.'
                            },
                            {
                                number: '03',
                                title: 'Track Your Money',
                                description: 'View your financial summary and spending habits.'
                            }
                        ].map((step, index) => (
                            <div key={index} className="text-center">
                                <div className="w-16 h-16 mx-auto bg-orange-500 text-white rounded-2xl flex items-center justify-center text-xl font-bold shadow-lg shadow-orange-200">
                                    {step.number}
                                </div>

                                <h3 className="text-xl font-bold text-gray-900 mt-6">
                                    {step.title}
                                </h3>

                                <p className="text-gray-500 mt-3 leading-relaxed">
                                    {step.description}
                                </p>
                            </div>
                        ))}

                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="px-6 py-20">
                <div className="max-w-5xl mx-auto bg-gray-900 rounded-3xl p-10 md:p-16 text-center">

                    <h2 className="text-3xl md:text-4xl font-bold text-white">
                        Ready to Take Control of Your Finances?
                    </h2>

                    <p className="text-gray-400 mt-5 max-w-xl mx-auto">
                        Start tracking your expenses today and build
                        better financial habits.
                    </p>

                    <Link
                        to="/register"
                        className="inline-block mt-8 bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 rounded-xl font-semibold transition duration-300"
                    >
                        Create Your Free Account →
                    </Link>

                </div>
            </section>

            {/* Footer */}
            <footer className="border-t border-gray-100 py-7 px-6">
                <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-3">
                    <h2 className="text-xl font-bold text-gray-900">
                        Expense<span className="text-orange-500">Tracker</span>
                    </h2>

                    <p className="text-sm text-gray-500">
                        © {new Date().getFullYear()} Expense Tracker. All rights reserved.
                    </p>
                </div>
            </footer>

        </main>
    )
}

export default Home
