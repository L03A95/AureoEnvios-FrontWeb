import { Link, useParams } from "react-router-dom"
import "../styles/Login.css"
import { useEffect } from "react"
import { SignIn } from "@clerk/clerk-react"
import { useNavigate } from "react-router-dom"

export default function Login () {
    const param = useParams()
    const navigate = useNavigate()

    useEffect(() => {
        if (param.usertype !== "driver" && param.usertype !== "client") {
            navigate('/');
        }
    }, [param, navigate]);

    return <>
        <h1>{param.usertype}</h1>
        <SignIn signUpUrl="/register"></SignIn>
    </>
}