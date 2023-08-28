import { useState } from "react";
import { useDispatch } from "react-redux";
import { login } from "./slices/userSlice";
import { useNavigate } from "react-router-dom";


function Login() {
    const [formData, setFormData] = useState({
        username: "",
        password: ""
    })

    const [errors, setErrors] = useState([])
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
                setFormData({
                    username: "",
                    password: ""
                })
                const errorList = user.errors.map(e => <h2 key={e}>{e}</h2>)
                setErrors(errorList)
                setTimeout(() => { setErrors([])}, 2000)
            }
        })
    }


    const changeHandler = (e) => {
        const {name, value} = e.target
        setFormData(formDataState => ({...formDataState, [name]:value }))
    }


    return (
        <>
            <form id="loginForm" onSubmit={submit}>
                <label htmlFor="username">Username</label>
                <input className="usernameInput" type="text" name="username" autoComplete="username" onChange={changeHandler} value={username} />

                <label htmlFor="password">password</label>
                <input className="passwordInput" type="password" name="password" autoComplete="current-password" onChange={changeHandler} value={password} />
                <button type="submit">Log In!</button>

            </form>
            {errors && <ul className="errors">{errors}</ul>}
        </>
    )
}

export default Login;