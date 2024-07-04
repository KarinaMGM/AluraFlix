import NovoVideo from "./pages/NovoVideo"
import Home from "./pages/Home"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import Cabecalho from "./components/Cabecalho"
import Footer from "./components/Footer"

function AppRoutes () {
    return(
        <BrowserRouter>
        <Cabecalho />
        <Routes>
            <Route path="/" element={<Home />}/>
            <Route path="/novovideo" element={<NovoVideo />} />
        </Routes>
        <Footer />
        </BrowserRouter>
    )
}

export default AppRoutes