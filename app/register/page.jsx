'use client'
import React, { useState } from "react";
import './register.css'
import Navbar from "../navbar/page";

const Login = () => {
    const [name, setName ]= useState('');
    const [password, setPassword] = useState('');
    const [login, setLogin] = useState(false);
    const handleLogin = () => {
        if (name === 'admin' && password === 'admin12345'){
            setLogin(true);
        } else {
            alert('Неверный логин или пароль');
        }
    };
    const handleLogout = () => {
        setLogin(false);
        setName('');
        setPassword('')
    }
    return(
        <div>
            <Navbar/>   
            <div className="login-card">
          <div>
            <p className="text-4">Регистрация</p>
            <p className="text">Вы зарегистрировались как:  {name}</p>
          </div>
          <div>
          <input
             type="text" 
             placeholder="Логин"
             value={name}
             onChange={(e) => setName(e.target.value)}/>
              <input
             type="password" 
             placeholder="Пароль"
             value={password}
             onChange={(e) => setPassword(e.target.value)}/>
             <button id="button" onClick={handleLogin}>Регистрация</button>
          </div>
          </div>
        </div>
    )
}

export default Login;