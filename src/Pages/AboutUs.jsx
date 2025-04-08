import { Link, Outlet } from "react-router-dom"

function AboutUs() {
  return (
    <>
    <h1>Welcome to About Us Page</h1>
    <Link to={'help'}>Help</Link>
    <Outlet/>
    </>
  )
}

export default AboutUs