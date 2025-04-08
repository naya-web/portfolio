import { Link, Outlet } from "react-router-dom"

function Portfolio() {
  return (
    <>
    <h3>Portfolio</h3>
    <Link to={'more'}>More</Link>
    <Outlet/>
    </>
  )
}

export default Portfolio