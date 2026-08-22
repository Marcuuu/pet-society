import {
    createContext,
    useContext,
    useEffect,
    useState,
    type ReactNode,
} from "react"

const STORAGE_KEY = "petHeavenSociety.username"

interface AuthContextValue {
    username: string | null
    isLoggedIn: boolean
    login: (username: string) => void
    logout: () => void
}

const AuthContext = createContext<AuthContextValue | undefined>(undefined)

export const AuthProvider = ({ children }: { children: ReactNode }) => {
    const [username, setUsername] = useState<string | null>(() =>
        localStorage.getItem(STORAGE_KEY),
    )

    useEffect(() => {
        if (username) {
            localStorage.setItem(STORAGE_KEY, username)
        } else {
            localStorage.removeItem(STORAGE_KEY)
        }
    }, [username])

    const login = (name: string) => setUsername(name)
    const logout = () => setUsername(null)

    return (
        <AuthContext.Provider
            value={{ username, isLoggedIn: username !== null, login, logout }}
        >
            {children}
        </AuthContext.Provider>
    )
}

export const useAuth = () => {
    const context = useContext(AuthContext)
    if (!context) {
        throw new Error("useAuth must be used within an AuthProvider")
    }
    return context
}
