import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import Home from "@/pages/Home"
import "@fontsource-variable/fraunces"
import "@fontsource-variable/inter"
import { Navigation, Footer } from "@/components"

function App() {
    return (
        <>
            <Navigation />
            <Router>
                <Routes>
                    <Route path="/" element={<Home />} />
                </Routes>
            </Router>
            <Footer />
        </>
    )
}

export default App
