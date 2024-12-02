import React, { useState } from 'react';
import "./Login.css";

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    // Lógica de login (ainda a ser implementada)
    alert('Login efetuado!');
  };

  return (
    <div className="container">
      <h2 id='title-log'>Login</h2>
      <p id='top-frase'>Bem-vindo! Faça login para acessar o sistema.</p>
      <form className='formInputs'>
        <input id='login'
          type="text"
          placeholder="Usuário"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <input id='senha'
          type="password"
          placeholder="Senha"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button id='buttonlog' type="button" onClick={handleLogin}>
          Entrar
        </button>
      </form>
      <p className="footer">© 2024 Bielosik</p>
    </div>
  );
};

export default Login;
