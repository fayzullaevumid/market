'use client'
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import './login.css'
import Navbar from "../navbar/page";

const Login = () => {
    const router = useRouter();
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
            <p className="text-4">Логин</p>
            <p className="text">Вы вошли в систему  как: {name}</p>
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
             <button id="button" onClick={handleLogin}>Войти</button>
          </div>
          <p className="text-3">Новый веб-сайт?</p>
    <button id="button-1" onClick={() => router.push('./register')}>Регистрация</button>
          </div>
        </div>
    )
}

export default Login;