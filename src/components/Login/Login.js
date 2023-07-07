import axios from "axios";
import swal from "@sweetalert/with-react";
import { useNavigate } from "react-router-dom";
import "../Login/Login.css"

function Login() {

    const navigate = useNavigate();

    const submitHandler = e => {
        e.preventDefault();

        const email = e.target.email.value;
        const password = e.target.password.value;

        const regexEmail = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;

        if (email === '' || password === '') {
            swal(<h3>Los campos no pueden estar vacíos</h3>);
            return;
        }

        if (email !== '' && !regexEmail.test(email)) {
            swal(<h3>Escribe un correo válido</h3>);
            return;
        }

        axios
            .get('http://localhost:3000/', {
                params: { email, password }
            })
            .then(response => {
                const user = response.data[0];
                if (user) {
                    swal(<h3>¡Logueado correctamente!</h3>);
                    const tokenRecibido = response.data.token;
                    localStorage.setItem('token', tokenRecibido);
                    navigate("/List");
                } else {
                    swal(<h3>Credenciales inválidas</h3>);
                }
            })
            .catch(error => {
                console.error('Error:', error.message);
                swal(<h3>Error de red o servidor</h3>);
            });

    }

    return (
        <>
            <div className="cardLogin">
                <h2 className="headLogin">Login</h2>
                <form onSubmit={submitHandler}>
                    <label>
                        <span>Email:</span><br />
                        <input type="text" name="email" />
                    </label>
                    <br />
                    <label>
                        <span>Password:</span><br />
                        <input type="password" name="password" />
                    </label>
                    <br />
                    <button type="submit">Ingresar</button>
                </form>
            </div>
        </>
    )
}

export default Login;
