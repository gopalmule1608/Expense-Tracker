import { createContext, useState } from 'react'

export const authShop = createContext()

const AuthContext = ({ children }) => {

    const [user, setUser] = useState(null)

    return (
        <authShop.Provider value={{ user, setUser }}>{children}</authShop.Provider>
    )
}

export default AuthContext
