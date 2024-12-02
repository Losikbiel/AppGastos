import React, { useState } from 'react';
import "./CadastroConta.css";

const CadastroConta = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleCadastro = () => {
    // Lógica de cadastro (ainda a ser implementada)
    alert('Conta cadastrada!');
  };

  return (
    <div className="container">
      <h2 id='title-cad'>Cadastro de Conta</h2>
      <p id='top-frase-cad'>Crie sua conta para começar a usar o sistema.</p>
      <form>
        <input id='user'
          type="text"
          placeholder="Usuário"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <input id='pass'
          type="password"
          placeholder="Senha"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button id='buttoncad' type="button" onClick={handleCadastro}>
          Cadastrar
        </button>
      </form>
      <p className="footer">© 2024 Bielosik</p>
    </div>
  );
};

export default CadastroConta;
