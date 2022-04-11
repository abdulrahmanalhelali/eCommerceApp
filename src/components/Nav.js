import { Link } from "react-router-dom";
import { useSelector } from 'react-redux'

const Nav = () => {
    const cart = useSelector((state) => state.cart)

    return (
        <nav className="navbar sticky-top navbar-dark" style={{ backgroundColor: "rgb(102, 0, 51)" }}>
            <div className="container d-flex justify-content-between">
                <div className="d-flex align-items-center">
                    <Link className="navbar-brand fs-4" to="/" style={{ fontFamily: "Rubik Glitch" }}>MoneyMoneyMoney</Link>
                    <div className="nav-item dropdown">
                        <a className="nav-link text-white dropdown-toggle fs-5" id="navbarDropdown" role="button"
                            data-bs-toggle="dropdown" aria-expanded="false" style={{ fontFamily: 'Lobster', textDecoration: "none" }}>
                            Categories</a>
                        <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                            <li><Link to="/categories/men's clothing" className="dropdown-item">Men's Clothing</Link></li>
                            <li><Link to="/categories/women's clothing" className="dropdown-item">Women's Clothing</Link></li>
                            <li><Link to="/categories/jewelery" className="dropdown-item">Jewelery</Link></li>
                            <li><Link to="/categories/electronics" className="dropdown-item">Electronics</Link></li>
                        </ul>
                    </div>
                </div>
                <Link className="nav-item text-decoration-none d-flex align-items-center" to="/cart" style={{ position: "relative", right: "10%" }}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" fill="white" className="bi bi-cart3" viewBox="0 0 16 16">
                        <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .49.598l-1 5a.5.5 0 0 1-.465.401l-9.397.472L4.415 11H13a.5.5 0 0 1 0 1H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM3.102 4l.84 4.479 9.144-.459L13.89 4H3.102zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z" />
                    </svg>
                    <span className="text-white fs-3 ms-3"
                        style={{ fontFamily: 'Lobster' }}
                    >{cart.totalItems}</span>
                </Link>
            </div>
        </nav>
    )
}

export default Nav;