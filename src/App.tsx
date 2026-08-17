import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import Home from "@/pages/Home"
import Adopt from "@/pages/Adopt"
import "@fontsource-variable/fraunces"
import "@fontsource-variable/inter"
import { Navigation, Footer } from "@/components"

function App() {
    return (
        <Router>
            <Navigation />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/adopt" element={<Adopt />} />
            </Routes>
            <Footer />
        </Router>
    )
}

export default App
