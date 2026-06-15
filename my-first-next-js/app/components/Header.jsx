import Link from "next/link";
function Header() {
  return (
     <header className="header">
        <nav>
          <div className="logo"><Link href="/">SISTECH CAFE</Link></div>
          <div className="nav-right">
            <div className="nav-links">
              <Link href="Menu">Menu</Link>
              <Link href="About">About Us</Link>
              <Link href="Promo">Promo</Link>
            </div>
            <Link href="/Login">
              <button className="login-button">Login</button>
            </Link>
          </div>
        </nav>
      </header> 
  )
}

export default Header