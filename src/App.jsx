import TopBanner from "./components/TopBanner/TopBanner"
import Header from "./components/Header/Header"
import HeroSection from "./components/HeroSection/HeroSection"
import CategoryCards from "./components/CategoryCards/CategoryCards"
import PopularProducts from "./components/PopularProducts/PopularProducts"

function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      <TopBanner />
      <Header />
      <HeroSection />
      <CategoryCards />
      <PopularProducts />
    </div>
  )
}

export default App
