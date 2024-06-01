import { useParams } from "react-router-dom"



export default function Register () {

    const param = useParams()


    return <>
        <form>
            <p>{param.userType}</p>
            <input type="email" placeholder="Email" />
            <input type="password" placeholder="Contraseña" />
            <button type="submit">Registrar</button>
        </form>
    </>
}