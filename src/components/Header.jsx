import { useContext } from "react"
import { Link } from "react-router-dom"
import { authShop } from "../context/AuthContext"

const Header = () => {
    const { user } = useContext(authShop)

    return (
        <header className="w-full bg-white border-b border-gray-100 shadow-sm">
            <nav className="max-w-7xl mx-auto flex justify-between items-center h-20 px-6 md:px-10">

                {/* Logo */}
                <Link to="/" className="flex items-center gap-2">
                    <div className="w-10 h-10 bg-orange-500 rounded-xl flex items-center justify-center shadow-md shadow-orange-200">
                        <span className="text-white text-xl font-bold">E</span>
                    </div>

                    <h1 className="text-2xl font-extrabold text-gray-900 tracking-tight">
                        Expense<span className="text-orange-500">Tracker</span>
                    </h1>
                </Link>

                {/* Navigation */}
                <div className="flex items-center gap-4">

                    {user ? (
                        <Link
                            to="/dashboard"
                            className="bg-orange-500 hover:bg-orange-600 text-white font-semibold px-6 py-2.5 rounded-xl shadow-md shadow-orange-200 transition-all duration-300 hover:-translate-y-0.5"
                        >
                            Dashboard
                        </Link>
                    ) : (
                        <Link
                            to="/login"
                            className="bg-orange-500 hover:bg-orange-600 text-white font-semibold px-6 py-2.5 rounded-xl shadow-md shadow-orange-200 transition-all duration-300 hover:-translate-y-0.5"
                        >
                            Login
                        </Link>
                    )}

                </div>
            </nav>
        </header>
    )
}

export default Header