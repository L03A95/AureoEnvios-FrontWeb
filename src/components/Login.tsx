import { Link, useParams } from "react-router-dom"
import "../styles/Login.css"
import { useState } from "react"

export default function Login () {
    const param = useParams()

    const [user, setUser] = useState({
        email: "",
        password: ""
    })

    const handleInputChange = (e : any) => {
        setUser({
           ...user,
            [e.target.name]: e.target.value
        })
     }


    return <>
        <form className="login_form">
            <input type="email" placeholder="Email" className="login_input" name="email" value={user.email} onChange={() => handleInputChange(event)}/>
            <input type="password" placeholder="Contraseña" className="login_input" name="password" value={user.password} onChange={() => handleInputChange(event)}/>
            <button type="submit" className="login_btn" onClick={() => console.log(user)}>Enviar</button>
            <span>¿No tienes cuenta? <Link to={param.userType === "driver" ? "/register/driver" : "/register/user"}>Crear cuenta como {param.userType === "driver" ? "conductor" : "cliente"}</Link></span>
        </form>
    </>
}