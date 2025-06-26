// Layout.jsx
import TopBanner from "../TopBanner/TopBanner"
import Header from "../Header/Header"
import Footer from "../Footer/Footer"

function Layout({ children }) {
  return (
    <>
      <TopBanner />
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  )
}

export default Layout
