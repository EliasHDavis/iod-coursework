import { NavLink } from "react-router-dom"
import { UserContext } from "./UserContext"
import { useContext } from "react"

export default function NavBar() {

    const {user, logout} = useContext(UserContext)

    const loggedIn = user ? 
    <NavLink to="/login"><button className="login" onClick={logout}>Log Out</button></NavLink> :
    <NavLink to="/login"><button className="login" >Log In</button></NavLink>

    return(
        // <div id="blockContainer">
            <div className="navContainer">
                <div className="logoTitle">
                    <NavLink className="title" to="/"><h1>UnCharted</h1></NavLink>
                </div>
                <div className="navLinks">
                    <NavLink to="/chart" className="centerLinks" ><button >Open</button></NavLink>
                    <NavLink to="/chart" className="centerLinks" ><button >Edit</button></NavLink>
                    <button onClick={()=>console.log(user)}>user</button>
                </div>
                <div className="navButtons">
                    {loggedIn}
                    {/* <NavLink to="/login"><button className="login">{loggedIn}</button></NavLink> */}
                    <NavLink to="/login"><button className="signUp">Sign Up</button></NavLink>
                </div>
            </div>
        // </div>
    )
}