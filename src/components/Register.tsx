import { SignUp } from "@clerk/clerk-react"
import { useParams, useNavigate } from "react-router-dom"
import { useEffect } from "react"



export default function Register () {

    const param = useParams()
    const navigate = useNavigate()

    useEffect(() => {
        if (param.usertype !== "driver" && param.usertype !== "client") {
            navigate('/');
        }
    }, [param, navigate]);


    return <>
        <SignUp signInUrl="/sign-in"></SignUp>
    </>
}