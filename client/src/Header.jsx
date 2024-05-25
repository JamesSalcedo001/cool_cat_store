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
        <>
            { loggedIn ? (
                <div className="headerDiv">
                    <img id="cat-icon" src={catLogo} alt="cat-icon"/>
                    <button className="nav-buttons" onClick={logOutUser}><FiLogOut id="logout-icon"/> Log Out!</button>
                    <NavLink className="nav-links" to="/">
                        <button className="nav-buttons">
                            <BiHome id="home-icon"/>Profile
                        </button>
                    </NavLink>
                    <NavLink className="nav-links" to="/products_list">
                        <button className="nav-buttons">
                            <BiShoppingBag id="product-icon"/> Products
                        </button>
                    </NavLink>
                    <NavLink className="nav-links" to="/cart">
                        <button className="nav-buttons" >
                            <FiShoppingCart id="cart-icon"/> Cart
                        </button>
                    </NavLink>
                </div>
                ) : (
                    <div className="headerDiv-logged-out">
                        <img id="cat-icon-logged-out" src={catLogo} alt="cat-icon"/>
                    </div>

             )}
        </>
    )
}

export default Header;