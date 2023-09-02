import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { login, setErrors } from "./slices/userSlice";
import { useNavigate } from "react-router-dom";


function Login() {
    const [formData, setFormData] = useState({
        username: "",
        password: ""
    })

    const errors = useSelector(state => state.user.errors)
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const {username, password} = formData


    const submit = (e) => {
        e.preventDefault()
        const formDataObj = {
            username, 
            password
        }

        fetch("/api/login", {
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
        <div className="login-div">
            <form id="loginForm" onSubmit={submit}>
                <label htmlFor="username">Username</label>
                <input className="formInput" placeholder="username" type="text" name="username" autoComplete="username" onChange={changeHandler} value={username} />

                <label htmlFor="password">Password</label>
                <input className="formInput" placeholder="password" type="password" name="password" autoComplete="current-password" onChange={changeHandler} value={password} />
                <button className="formButton" type="submit">Log In!</button>

            </form>
            {errors && <ul className="errors">{errors.map((e, ind) => <li key={ind}>{e}</li>)}</ul>}
        </div>
    )
}

export default Login;