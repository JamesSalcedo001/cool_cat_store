import { useDispatch, useSelector } from "react-redux";
import { logout } from "./slices/userSlice"
import { useNavigate, NavLink } from "react-router-dom";
import catLogo from "./cat.png"

function Header() {
    const loggedIn = useSelector(state => state.user.loggedIn)
    const dispatch = useDispatch()
    const navigate = useNavigate()


    const logOutUser = () => {
        fetch("/api/logout", {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json"
            }
        })
        .then(() => {
            dispatch(logout())
            navigate("/")
        })
        .catch(error => {
            console.error("logout failed", error)
        })
    }


    return (
        <div className="headerDiv">
            { loggedIn ? (
                <>
                    <img id="cat-icon" src={catLogo} alt="cat-icon"/>
                    <button id="logout-button" onClick={logOutUser}>Log Out!</button>
                    <NavLink className="nav-buttons" to="/">Profile</NavLink>
                    <NavLink className="nav-buttons" to="/products_list">Products</NavLink>
                    <NavLink className="nav-buttons" to="/cart">Cart</NavLink>
                </>
                ) : (
                    <>
                        <img id="cat-icon" src={catLogo} alt="cat-icon"/>
                        <h1 id="header-message">Hey, I'm Cool Cat! Welcome to my shop!</h1>
                    </>

             )}
        </div>
    )
}

export default Header;