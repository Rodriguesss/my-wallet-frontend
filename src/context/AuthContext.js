import { createContext, useState } from "react"

const AuthContext = createContext()

export function AuthProvider({ children }) {
    const persistedToken = JSON.parse(localStorage.getItem("token"))
    const [token, setToken] = useState(persistedToken)
    const [name, setName] = useState("Fulano")
    const [deposit, setDeposit] = useState(false)

    function login(token) {
        setToken(token)
        localStorage.setItem("token", JSON.stringify(token))
    }

    function logout() {
        localStorage.removeItem("token")
    }

    return (
        <AuthContext.Provider value={{ login, logout, token, setName, name, setDeposit, deposit }}>
            {children}
        </AuthContext.Provider>
    )
}

export default AuthContext