import { useSelector, useDispatch } from "react-redux";
import { useCallback } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { deleteUser } from "./slices/userSlice";
import { FiLogIn } from "react-icons/fi";
import { BiTrash } from "react-icons/bi";
import { BiEdit } from "react-icons/bi";




function Home() {
    const user = useSelector(state => state.user.user)
    const loggedIn = useSelector(state => state.user.loggedIn)

    const dispatch = useDispatch()
    const navigate = useNavigate()

    const handleEditProfile = useCallback(() => {
        navigate("/edit_profile")
    },[navigate])


    const handleDeleteAccount = async () => {
        const res = await fetch(`/api/users/${user.id}`, { method: "DELETE" })
        if (res.ok) {
            dispatch(deleteUser())
            navigate("/")
        } else {
            console.log("Failed to delete")
        }
    }

    if (loggedIn) {
        return (
            <div id="home-bio">
            <div id="bio">
                <img src={user.avatar} alt="user avatar" id="user-avatar"/>
                <h2 id="user-text">Welcome to your profile</h2>
                <h2 id="username">{user.username}</h2>
                <button className="user-buttons" onClick={handleDeleteAccount}>Delete<BiTrash id="delete-icon-user"/></button>
                <button className="user-buttons" onClick={handleEditProfile}> Edit <BiEdit id="edit-icon-user"/> </button>
            </div>
            </div>
        )
    } else {
        return (
            <div id="home-login-links">
                <NavLink to="/log_in">
                    <button className="login-signup-home"><FiLogIn className="login-signup-link-icon"/> Log In!</button>
                </NavLink>
                <NavLink to="/sign_up">
                    <button className="login-signup-home"><FiLogIn className="login-signup-link-icon"/> Sign Up!</button>
                </NavLink>
            </div>
        )
    }
}

export default Home;