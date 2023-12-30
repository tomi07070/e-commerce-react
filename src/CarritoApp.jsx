import { Navigate, Route, Routes } from "react-router-dom"
import { NavBar } from "./components/Navbar.jsx"
import { ComprasPage } from "./pages/ComprasPage"
import { CarritoPage } from "./pages/CarritoPage"
import { ProductosProvider } from "./context/ProductosProvider"
import { CarritoProvider } from "./context/CarritoProvider"
import { SectionsPage } from "./pages/SectionsPage"
import { HomePage } from "./pages/HomePage.jsx"
import { Footer } from "./components/Footer.jsx"
import { ElectronicsPage } from "./pages/ElectronicsPage.jsx"
import { JeweleryPage } from "./pages/JeweleryPage.jsx"
import { MensPage } from "./pages/MensPage.jsx"
import { WomenPage } from "./pages/WomenPage.jsx"




export const CarritoApp = () => {
    return (
        <ProductosProvider>
            <CarritoProvider>
                <NavBar></NavBar>
                <div className="container">
                    <Routes>
                        <Route path="/" element={<HomePage></HomePage>}></Route>
                        <Route path="/carrito" element={<CarritoPage></CarritoPage>}></Route>
                        <Route path="/sections" element={<SectionsPage></SectionsPage>}></Route>
                        <Route path="/compras" element={<ComprasPage></ComprasPage>}></Route>
                        <Route path="/electronics" element={<ElectronicsPage></ElectronicsPage>}></Route>
                        <Route path="/jewelery" element={<JeweleryPage></JeweleryPage>}></Route>
                        <Route path="/men-clothing" element={<MensPage></MensPage>}></Route>
                        <Route path="/women-clothing" element={<WomenPage></WomenPage>}></Route>
                        <Route path="/*" element={<Navigate to='/' />}></Route>
                    </Routes>
                </div>
                <Footer></Footer>
            </CarritoProvider>
        </ProductosProvider>
    )
}