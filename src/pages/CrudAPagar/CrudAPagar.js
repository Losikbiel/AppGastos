import React, { useState } from 'react';
import "./CrudAPagar.css";

const CrudAPagar = () => {
  const [descricao, setDescricao] = useState('');
  const [valor, setValor] = useState('');

  const handleAdd = () => {
    alert('Despesa adicionada!');
  };

  return (
    <div className="container">
      <h2>CRUD - A Pagar</h2>
      <p>Gerencie suas despesas cadastrando, editando e excluindo registros.</p>
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

export default CrudAPagar;
