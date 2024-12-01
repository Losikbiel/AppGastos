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
      <h2>Cadastro de Conta</h2>
      <p>Crie sua conta para começar a usar o sistema.</p>
      <form>
        <input
          type="text"
          placeholder="Usuário"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          type="password"
          placeholder="Senha"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="button" onClick={handleCadastro}>
          Cadastrar
        </button>
      </form>
    </div>
  );
};

export default CadastroConta;
