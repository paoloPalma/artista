import { Outlet } from "react-router-dom"
import HeaderLayout2 from "../components/HeaderLayout2"
import Footer from "../components/Footer"


const GuestLayout = () => {
  return (
    <>
        <HeaderLayout2 />
        <Outlet />
        <Footer />
    </>
  )
}

export default GuestLayout