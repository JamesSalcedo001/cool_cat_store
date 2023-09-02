import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { login, setErrors } from "./slices/userSlice";
import { useNavigate } from "react-router-dom";


function Signup() {
    const [formData, setFormData] = useState({
        username: "",
        password: "",
        avatar: ""
    })

    const errors = useSelector(state => state.user.errors)
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const {username, password, avatar} = formData


    const submit = (e) => {
        e.preventDefault()
        const formDataObj = {
            username, 
            password, 
            avatar
        }
        fetch("/api/signup", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(formDataObj)
        })
        .then(res => res.json())
        .then(user => {
            if (!user.errors) {
                dispatch(login(user))
                navigate("/")
            } else {
                dispatch(setErrors(user.errors))
                setTimeout(() => { dispatch(setErrors([])) }, 2000)
            }
        })
    }


    const changeHandler = (e) => {
        const {name, value} = e.target
        setFormData(formDataState => ({...formDataState, [name]:value }))
    }


    return (
        <div className="signup-div">
            <form id="signup-form" onSubmit={submit}>
                <label htmlFor="username">Username</label>
                <input className="formInput" placeholder="username"  type="text" name="username" autoComplete="username" onChange={changeHandler} value={username} />

                <label htmlFor="password">Password</label>
                <input className="formInput" placeholder="password"  type="password" name="password" autoComplete="current-password" onChange={changeHandler} value={password} />

                <label htmlFor="avatar">Avatar</label>
                <input className="formInput" placeholder="avatar URL"  type="text" name="avatar" onChange={changeHandler} value={avatar} />
                <button className="formButton" type="submit">Sign Up!</button>
            </form>
            {errors && <ul className="errors">{errors.map((e, ind) => <li key={ind}>{e}</li>)}</ul>}
        </div>
    )
}

export default Signup;