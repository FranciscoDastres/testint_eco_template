import { Routes, Route } from "react-router-dom"
import TopBanner from "./components/TopBanner/TopBanner"
import Header from "./components/Header/Header"
import HeroSection from "./components/HeroSection/HeroSection"
import CategoryCards from "./components/CategoryCards/CategoryCards"
import PopularProducts from "./components/PopularProducts/PopularProducts"
import NotFound from "./components/NotFound/NotFound.jsx"

import "./index.css"

// Puedes crear un Layout si todos los componentes están en todas las páginas
function Layout() {
  return (
    <>
      <TopBanner />
      <Header />
    </>
  )
}

function HomePage() {
  return (
    <>
      <HeroSection />
      <CategoryCards />
      <PopularProducts />
    </>
  )
}

// Aquí podrías agregar otras páginas en el futuro como /women o /men
function App() {
  return (
    <div className="w-screen min-h-screen bg-gray-100">
      <Layout />
      <Routes>
        <Route path="/" element={<HomePage />} />
        {/* Rutas adicionales */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  )
}

export default App
