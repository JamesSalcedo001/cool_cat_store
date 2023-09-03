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
            <div id="bio">
                <img src={user.avatar} alt="user avatar" id="user-avatar"/>
                <h2 id="user-text">Welcome to your profile</h2>
                <h2 id="username">{user.username}</h2>
                <button className="user-buttons" onClick={handleDeleteAccount}>Delete Account</button>
                <button className="user-buttons" onClick={() => navigate("/edit_profile")}>Edit Profile!</button>
            </div>
        )
    } else {
        return (
            <div id="home-login-links">
                <NavLink to="/log_in">
                    <button className="login-home">Log In!</button>
                </NavLink>
                <NavLink to="/sign_up">
                    <button className="signup-home">Sign Up!</button>
                </NavLink>
            </div>
        )
    }
}

export default Home;