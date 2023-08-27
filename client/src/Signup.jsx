import { useState } from "react";
import { useDispatch } from "react-redux";
import { login } from "./slices/userSlice";
import { useNavigate } from "react-router-dom";


function Signup() {
    const [formData, setFormData] = useState({
        username: "",
        password: "",
        avatar: ""
    })

    const [errors, setErrors] = useState([])
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
                setFormData({
                    username: "",
                    password: "",
                    avatar: ""
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
            <form id="signupForm" onSubmit={submit}>
                <label htmlFor="username">Username</label>
                <input className="usernameInput" type="text" name="username" autoComplete="username" onChange={changeHandler} value={username} />

                <label htmlFor="password">password</label>
                <input className="passwordInput" type="password" name="password" autoComplete="current-password" onChange={changeHandler} value={password} />

                <label htmlFor="avatar">avatar</label>
                <input className="avatarInput" type="text" name="avatar" autoComplete="avatar" onChange={changeHandler} value={avatar} />
            </form>
            {errors && <ul className="errors">{errors}</ul>}
        </>
    )
}

export default Signup;