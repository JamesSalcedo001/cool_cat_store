import { useSelector, useDispatch } from "react-redux";
import { NavLink, useNavigate } from "react-router-dom";
import { deleteUser } from "./slices/userSlice";
import { FiLogIn } from "react-icons/fi";
import { BiTrash } from "react-icons/bi";
import { BiEdit } from "react-icons/bi";




function Home() {
    const user = useSelector(state => state.user.user)
    const loggedIn = useSelector(state => state.user.loggedIn)
    const isLoading = useSelector(state => state.user.isLoading)
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const handleDeleteAccount = async () => {
        const res = await fetch(`/api/users/${user.id}`, { method: "DELETE" })
        if (res.ok) {
            dispatch(deleteUser())
            navigate("/")
        } else {
            console.log("Failed to delete")
        }
    }

    if (isLoading) {
        return (
            <div className='loadingSection'>
                <div className="loading"></div>
                <h3 className="load">Just a moment...</h3>
            </div>
        )
    }

    if (loggedIn) {
        return (
            <div id="home-bio">
            <div id="bio">
                <img src={user.avatar} alt="user avatar" id="user-avatar"/>
                <h2 id="user-text">Welcome to your profile</h2>
                <h2 id="username">{user.username}</h2>
                <button className="user-buttons" onClick={handleDeleteAccount}>Delete<BiTrash id="delete-icon-user"/></button>
                <button className="user-buttons" onClick={() => navigate("/edit_profile")}> Edit <BiEdit id="edit-icon-user"/> </button>
            </div>
            </div>
        )
    } else {
        return (
            <div id="home-login-links">
                <NavLink to="/log_in">
                    <button className="login-signup-home"><FiLogIn/> Log In!</button>
                </NavLink>
                <NavLink to="/sign_up">
                    <button className="login-signup-home"><FiLogIn/> Sign Up!</button>
                </NavLink>
            </div>
        )
    }
}

export default Home;