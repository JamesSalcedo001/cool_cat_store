import { useDispatch, useSelector } from "react-redux";
import { logout } from "./slices/userSlice"
import { useNavigate, NavLink } from "react-router-dom";

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
    }


    return (
        <div className="headerDiv">
            { loggedIn ? (
                <>
                    <button onClick={logOutUser}>Log Out!</button>
                    <NavLink to="/">Profile!</NavLink>
                    <NavLink to="/products_list">Products</NavLink>
                </>
                ) : (
                    <h3>welcome</h3>
             )}
        </div>
    )
}

export default Header;