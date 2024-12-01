import React, { useState } from 'react';
import "./CrudAReceber.css";

const CrudAReceber = () => {
  const [descricao, setDescricao] = useState('');
  const [valor, setValor] = useState('');

  const handleAdd = () => {
    alert('Receita adicionada!');
  };

  return (
    <div className="container">
      <h2>CRUD - A Receber</h2>
      <p>Gerencie suas receitas cadastrando, editando e excluindo registros.</p>
      <form>
        <input
          type="text"
          placeholder="Descrição"
          value={descricao}
          onChange={(e) => setDescricao(e.target.value)}
        />
        <input
          type="number"
          placeholder="Valor"
          value={valor}
          onChange={(e) => setValor(e.target.value)}
        />
        <button type="button" onClick={handleAdd}>
          Adicionar
        </button>
      </form>
    </div>
  );
};

export default CrudAReceber;
