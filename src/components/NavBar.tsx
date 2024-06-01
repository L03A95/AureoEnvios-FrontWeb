import "../styles/NavBar.css"
import { Link } from "react-router-dom"
import { SignedIn, SignedOut, UserButton } from "@clerk/clerk-react"

export default function NavBar () {


    return <header className="header_container">
        <h1 className="logo_name">Aureo Envios</h1>
        <nav className="nav_wrapper">
            <div className="nav_list">
                <SignedIn>
                    <UserButton afterSignOutUrl='/sign-in' />
                </SignedIn>
                <SignedOut>
                    <Link to="/sign-in">Sign In</Link>
                </SignedOut>
            </div>
        </nav>
    </header>
}