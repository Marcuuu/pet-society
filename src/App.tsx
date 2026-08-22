import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import Home from "@/pages/Home"
import Adopt from "@/pages/Adopt"
import AdoptDetail from "@/pages/AdoptDetail"
import About from "@/pages/About"
import Services from "@/pages/Services"
import PetCare from "@/pages/PetCare"
import Login from "@/pages/Login"
import Register from "@/pages/Register"
import Release from "@/pages/Release"
import NotFound from "@/pages/NotFound"
import "@fontsource-variable/fraunces"
import "@fontsource-variable/inter"
import { Navigation, Footer } from "@/components"
import { AuthProvider } from "@/lib/auth"

function App() {
    return (
        <AuthProvider>
            <Router>
                <div className="flex min-h-screen flex-col">
                    <Navigation />
                    <main className="flex-1">
                        <Routes>
                            <Route path="/" element={<Home />} />
                            <Route path="/adopt" element={<Adopt />} />
                            <Route
                                path="/adopt/:id"
                                element={<AdoptDetail />}
                            />
                            <Route path="/pet-care" element={<PetCare />} />
                            <Route path="/services" element={<Services />} />
                            <Route path="/about" element={<About />} />
                            <Route path="/login" element={<Login />} />
                            <Route path="/register" element={<Register />} />
                            <Route
                                path="/release-a-pet"
                                element={<Release />}
                            />
                            <Route path="*" element={<NotFound />} />
                        </Routes>
                    </main>
                    <Footer />
                </div>
            </Router>
        </AuthProvider>
    )
}

export default App
