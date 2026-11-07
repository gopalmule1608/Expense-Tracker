import React, { useContext } from 'react'
import { authShop } from '../context/AuthContext'

const Login = () => {
    const data = useContext(authShop)
    console.log(data)
   

    return (
        <div>
            <h1>Welcome to Login page</h1>
        </div>
    )
}

export default Login
