import { Outlet } from "react-router-dom"
import Footer from "../components/Footer"
import Header from "../components/Header"
/* import HeaderLayout2 from "../components/HeaderLayout2"
 */
const WebsiteLayout = () => {
  return (
    <>
        <Header />
        <Outlet />
        <Footer />
    </>
  )
}

export default WebsiteLayout