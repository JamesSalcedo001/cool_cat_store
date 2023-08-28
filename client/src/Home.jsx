import { useSelector, useDispatch } from "react-redux";
import { NavLink, useNavigate } from "react-router-dom";
import { deleteUser } from "./slices/userSlice";


function Home() {
    const user = useSelector(state => state.user.user)
    const loggedIn = useSelector(state => state.user.loggedIn)
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const handleDeleteAccount = () => {
        fetch(`/api/users/${user.id}`, {
            method: "DELETE",
        })
        .then((res) => {
            if(res.ok) {
                dispatch(deleteUser())
                navigate("/")
            } else {
                console.log("Failed to delete")
            }
        })
    }


    if (loggedIn) {
        return (
            <>
                <h3>Welcome!</h3>
                <h2>{user.username}</h2>
                <img src={user.avatar} alt="user avatar" id="user-avatar"/>
                <button onClick={handleDeleteAccount}>Delete Account</button>
                <button onClick={() => navigate("/edit_profile")}>Edit Profile!</button>
            </>
        )
    } else {
        return (
            <>
                <NavLink to="/log_in">
                    <button className="login-home">Log In!</button>
                </NavLink>
                <NavLink to="/sign_up">
                    <button className="signup-home">Sign Up!</button>
                </NavLink>
                <h2 id="welcome">Welcome</h2>
            </>
        )
    }
}

export default Home;