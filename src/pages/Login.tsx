import React, {SyntheticEvent, useEffect, useState} from 'react';
import { useNavigate } from "react-router-dom";
//import md5 from 'md5';

/* 
const express = require("express");
const app = express();
const cors = require("cors");

app.use(
    cors({
        origin: "*"
    })
);
 */
//const history = useHistory();setEditar

const Login = ( props: { setName: (name: string) => void } ) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [redirect, setRedirect] = useState(false);
    
    let navigate = useNavigate();
        
    const submit = async (e: SyntheticEvent) => {
        e.preventDefault();

        const baseUrl="http://localhost:5083/api/Usuarios"; 
        const Full = baseUrl +`/${email}/${password}`

        //// http://localhost:5083/api/Usuarios/carlgm12@gmail.com/12345
        /* const response = await fetch(baseUrl +`/${email}/${password}`, {
            method: 'GET',
            headers: {'Content-Type': 'application/json'},
            credentials: 'include',
            body: JSON.stringify({
                email,
                password
            })
        }); */

        //console.log('hola')
        const response = await fetch(Full);
        //console.log(response)

        if (response.ok) {
            const data = await response.json();
            //console.log(data)
            //setCategorias(data)
            //navigate("/");
            if (data.length === 0) {
                console.log('esta vacia')
                //alert('Email y Clave incorrecta');    
            }    
            else {
                navigate("/Productos");
                //setRedirect(true);
                props.setName(data.name);
                //navigate("/Productos");            
                //console.log('esta llena')
            }    
        } else {
            //navigate("/login");        
            console.log("error en la lista")
        }

    
    } // fin del async

    //console.log(redirect)
    //if (redirect) {
    //    return <Navigate to="/Productos" replace={true} />
    //}
    

   
    return (
        <div>
            <form onSubmit={submit}>
            <h1 className="h3 mb-3 fw-normal">Ingresar Email y Clave</h1>
            <input type="email" className="form-control" placeholder="Email" required
               onChange={e => setEmail(e.target.value)}

            />

            <input type="password" className="form-control" placeholder="Clave" required
               onChange={e => setPassword(e.target.value)}

            />

            <button className="w-100 btn btn-lg btn-primary" type="submit">Sign in</button>
        </form>
        </div>
        
    );    
};

export default Login;
