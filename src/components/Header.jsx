import { useContext } from "react"
import { Link } from "react-router-dom"
import { authShop } from "../context/AuthContext"


const Header = () => {
    const { user } = useContext(authShop)

    return (
        <header className="flex justify-around items-center h-22 bg-gray-200">
            <h1 className="text-2xl font-bold">Expense Tracker</h1>
            <div>
                {   
                    user ? <Link to={'/dashboard'} className="bg-orange-400 font-bold px-3 py-2 rounded text-white">Dashboard</Link> : <Link to={'/login'} className="bg-orange-400 font-bold px-3 py-2 rounded text-white">Login</Link>
                }
            </div>
        </header >
    )
}

export default Header
