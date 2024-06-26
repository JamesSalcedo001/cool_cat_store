import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { updateUser, setErrors } from "./slices/userSlice";
import { useNavigate } from "react-router-dom";
import { FiEdit } from "react-icons/fi";


function EditProfile() {
    const user = useSelector(state => state.user.user)
    const errors = useSelector(state => state.user.errors)
    const navigate = useNavigate()
    const dispatch = useDispatch()

    const [formData, setFormData] = useState({
        username: user?.username || "",
        avatar: user?.avatar || "",
        password: ""
    })

    const {username, password, avatar} = formData

    const submit = (e) => {
        e.preventDefault()

        fetch(`/api/users/${user.id}`, {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(formData)
        })
        .then(res => res.json())
        .then(data => {
            if (data.errors) {
                dispatch(setErrors(data.errors))
                setTimeout(() => { dispatch(setErrors([])) }, 2000)
            } else {
                dispatch(updateUser(data))
                navigate("/")
            }
        })
    }

    const changeHandler = (e) => {
        const {name, value} = e.target
        setFormData(formDataObj => ({...formDataObj, [name]: value }))
    }


    return (
        <div className="edit-profile-div">
            <form id="edit-profile-form" onSubmit={submit}>
            <h2 id="title-edit">Edit Profile</h2>
                <label htmlFor="username">Username</label>
                <input type="text" className="formInput" placeholder="username" value={username} name="username" autoComplete="username" onChange={changeHandler}/>

                <label htmlFor="password">Password</label>
                <input type="password" className="formInput" placeholder="password" value={password} name="password" autoComplete="current-password" onChange={changeHandler}/>

                <label htmlFor="avatar">Avatar</label>
                <input type="text" className="formInput" placeholder="avatar URL" value={avatar} name="avatar" onChange={changeHandler}/>
                <button className="formButton" type="submit">
                    <FiEdit className="login-signup-lock"/> Update Profile!
                </button>
            </form>
            {errors && errors.map((e, ind) => <h5 key={ind} className="error">{e}</h5>)}
        </div>
    )
}

export default EditProfile;