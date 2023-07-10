import { Link } from "react-router-dom"

const Navbar = () => {
  return (
    <div className='navbar'>
        <ol>
            <li>
                <Link to="/">Home</Link>
            </li>
            <li>
                <Link to="/about">About me</Link>
            </li>
            <li>
                <Link to="/contact">Contact</Link>
            </li>
        </ol>
    </div>
  )
}

export default Navbar