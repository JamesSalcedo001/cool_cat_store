import { useDispatch, useSelector } from "react-redux";
import { logout } from "./slices/userSlice"
import { useNavigate, NavLink } from "react-router-dom";
import catLogo from "./cat.png"
import {FiLogOut} from "react-icons/fi"
import {FiShoppingCart} from "react-icons/fi"
import {BiShoppingBag} from "react-icons/bi"
import { BiHome } from "react-icons/bi";





function Header() {
    const loggedIn = useSelector(state => state.user.loggedIn)
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const logOutUser = async () => {
        try {
            const res = await fetch("/api/logout", {
                method: "DELETE",
                headers: {
                    "Content-Type": "application/json"
                }
            })
            if (res.ok) {
                dispatch(logout())
                navigate("/")
            } else {
                console.log(res)
            }
        } catch (error) {
            console.error("logout failed", error)
        }
      
    }

    return (
        <div className="headerDiv">
            { loggedIn ? (
                <>
                    <img id="cat-icon" src={catLogo} alt="cat-icon"/>
                    <button className="nav-buttons" onClick={logOutUser}><FiLogOut id="logout-icon"/> Log Out!</button>
                    <NavLink className="nav-buttons" to="/"><BiHome id="home-icon"/>Profile</NavLink>
                    <NavLink className="nav-buttons" to="/products_list"><BiShoppingBag id="product-icon"/> Products</NavLink>
                    <NavLink className="nav-buttons" to="/cart"><FiShoppingCart id="cart-icon"/> Cart</NavLink>
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