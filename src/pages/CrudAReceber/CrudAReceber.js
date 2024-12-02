import React, { useState } from 'react';
import "./CrudAReceber.css";

const CrudAReceber = () => {
  const [descricao, setDescricao] = useState('');
  const [valor, setValor] = useState('');
  const [receitas, setReceitas] = useState([]);

  const handleAdd = () => {
    const novaReceita = { descricao, valor: parseFloat(valor) };
    setReceitas([...receitas, novaReceita]);
    setDescricao('');
    setValor('');
    alert('Receita adicionada!');
  };

  const handleDelete = (index) => {
    const newReceitas = receitas.filter((_, i) => i !== index);
    setReceitas(newReceitas);
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
      <ul>
        {receitas.map((receita, index) => (
          <li key={index}>
            {receita.descricao} - R$ {receita.valor}
            <button onClick={() => handleDelete(index)}>Excluir</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CrudAReceber;
