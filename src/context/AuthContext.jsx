import { createContext, useState } from 'react'

export const authShop = createContext()

const AuthContext = ({ children }) => {

    const [user, setUser] = useState(null)
    console.log(user)

    return (
        <authShop.Provider value={{ user, setUser }}>{children}</authShop.Provider>
    )
}

export default AuthContext
