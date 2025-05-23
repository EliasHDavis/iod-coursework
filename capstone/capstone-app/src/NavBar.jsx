import { NavLink } from "react-router-dom"

export default function NavBar() {
    return(
        // <div id="blockContainer">
            <div className="navContainer">
                <div className="logoTitle">
                    <NavLink to="/"><h1>UnCharted</h1></NavLink>
                </div>
                <div className="navLinks">
                    <a href="">link</a>
                    <a href="">link</a>
                </div>
                <div className="navButtons">
                    <NavLink to="/login"><button className="login">Login</button></NavLink>
                    <NavLink to="/login"><button className="signUp">Sign Up</button></NavLink>
                </div>
            </div>
        // </div>
    )
}