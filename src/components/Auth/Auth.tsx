import { useEffect, useState, type SubmitEvent } from "react"
import { useLocation, useNavigate } from "react-router-dom"
import { useAuth } from "@/lib/auth"
import { TextField } from "@/components/ui/TextField"

type Mode = "login" | "register"

export const Auth = () => {
    const location = useLocation()
    const navigate = useNavigate()
    const { login } = useAuth()
    const [mode, setMode] = useState<Mode>(
        location.pathname === "/register" ? "register" : "login",
    )
    const [username, setUsername] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [confirmPassword, setConfirmPassword] = useState("")

    useEffect(() => {
        setMode(location.pathname === "/register" ? "register" : "login")
    }, [location.pathname])

    const handleSubmit = (e: SubmitEvent<HTMLFormElement>) => {
        e.preventDefault()
        const trimmed = username.trim()
        if (!trimmed) return
        login(trimmed)
        navigate("/")
    }

    return (
        <div className="container mx-auto mt-16 mb-32 px-4">
            <div className="mx-auto max-w-md">
                <h2 className="text-center text-secondary-dark">
                    {mode === "login" ? "Welcome Back" : "Create Your Account"}
                </h2>
                <p className="mt-4 text-center text-text-muted">
                    {mode === "login"
                        ? "Log in to continue your adoption journey with us"
                        : "Register to start finding your new best friend"}
                </p>

                <div className="mt-8 flex rounded-full border border-border bg-white p-1">
                    <button
                        type="button"
                        onClick={() => navigate("/login")}
                        className={`flex-1 cursor-pointer rounded-full px-4 py-2 text-sm font-semibold transition-colors ${
                            mode === "login"
                                ? "bg-secondary text-white"
                                : "text-text-muted"
                        }`}
                    >
                        Log In
                    </button>
                    <button
                        type="button"
                        onClick={() => navigate("/register")}
                        className={`flex-1 cursor-pointer rounded-full px-4 py-2 text-sm font-semibold transition-colors ${
                            mode === "register"
                                ? "bg-secondary text-white"
                                : "text-text-muted"
                        }`}
                    >
                        Register
                    </button>
                </div>

                <form
                    onSubmit={handleSubmit}
                    className="mt-8 flex flex-col gap-4"
                >
                    <TextField
                        label="Username"
                        required
                        value={username}
                        onChange={setUsername}
                        placeholder="e.g. petlover123"
                    />
                    {mode === "register" && (
                        <TextField
                            label="Email"
                            type="email"
                            required
                            value={email}
                            onChange={setEmail}
                            placeholder="you@example.com"
                        />
                    )}
                    <TextField
                        label="Password"
                        type="password"
                        required
                        value={password}
                        onChange={setPassword}
                        placeholder="••••••••"
                    />
                    {mode === "register" && (
                        <TextField
                            label="Confirm Password"
                            type="password"
                            required
                            value={confirmPassword}
                            onChange={setConfirmPassword}
                            placeholder="••••••••"
                        />
                    )}
                    <button
                        type="submit"
                        className="btn btn-primary mt-2 w-full"
                    >
                        {mode === "login" ? "Log In" : "Create Account"}
                    </button>
                </form>
            </div>
        </div>
    )
}
