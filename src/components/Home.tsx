import "../styles/Home.css"
import box from "../assets/images/caja.png"
import truck from "../assets/images/camion.png"
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const ENDPOINT = import.meta.env.VITE_API_USER_ENDPOINT


export default function Home () {
    const [hovered, setHovered] = useState("");

    console.log(ENDPOINT);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(ENDPOINT);
                const data = await response.json();
                console.log(data); // Verifica que los datos sean correctos
            } catch (error) {
                console.error("Error fetching data:", error);
            }
        };

        fetchData();
    }, []);

    // const response = await fetch(ENDPOINT)
    // console.log(response);

    return (
        <article className="main_login">
            <h2 className="main_text">Inicia sesión para empezar a enviar</h2>
            <ul className="login_button_wrapper">
                <li className="login_list"  >
                    <img src={truck} className={`main_image truck ${hovered === "client" ? "dim" : ""}
                    ${hovered === "driver" ? "selected" : ""}`}/>
                    <Link to="/sign-in/driver" className="login_button driver" onMouseEnter={() => setHovered("driver")} onMouseLeave={() => setHovered("")}>Soy conductor</Link>
                </li>
                <li className="login_list" >
                    <img src={box} className={`main_image box ${hovered === "driver" ? "dim" : ""} ${hovered === "client" ? "selected" : ""}`}/>
                    <Link to="/sign-in/client" className="login_button client" onMouseEnter={() => setHovered("client")} onMouseLeave={() => setHovered("")}>Soy cliente</Link>
                </li>
            </ul>

        </article>
        )

}