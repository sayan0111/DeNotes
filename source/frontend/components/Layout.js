
import Navbar from './NavBar'
import Footer from './Footer'
import SideBar from './SideBar'

export default function Layout({ children }) {
  return (
    <>
      <Navbar />
    
      <main>{children}</main>
      <Footer />
    </>
  )
}