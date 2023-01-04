import React, {useEffect, useState} from 'react';
import './App.css';
import Nav from "./components/Nav";
import {BrowserRouter, Routes , Route} from "react-router-dom";
import Productos from "./pages/Productos";
import Login from "./pages/Login";

//import Register from "./pages/Register";

function App() {
    const [name, setName] = useState('');
    //setMostrarModal={setMostrarModal}
    
    /* let inilogin;
    
    if (name) {
      inilogin = <Login setName={setName}/>;
    } else {
      inilogin = 'vacio';
    } */
    
    return (
        <div className="App">                  
            <BrowserRouter>
                <Nav name={name} setName={setName}/>              
                    <main className="form-signin">
                       {}
                        <Routes> 
                            <Route path="/Login" element={<Login setName={setName}/>} />
                            <Route path="/Productos" element={<Productos />} />
                        </Routes>    
                    </main>

            </BrowserRouter>
        </div>
    );
}

export default App;
