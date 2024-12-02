import React, { useState } from 'react';
import "./CrudAPagar.css";

const CrudAPagar = () => {
  const [descricao, setDescricao] = useState('');
  const [valor, setValor] = useState('');
  const [despesas, setDespesas] = useState([]);

  const handleAdd = () => {
    const novaDespesa = { descricao, valor: parseFloat(valor) };
    setDespesas([...despesas, novaDespesa]);
    setDescricao('');
    setValor('');
    alert('Despesa adicionada!');
  };

  const handleDelete = (index) => {
    const newDespesas = despesas.filter((_, i) => i !== index);
    setDespesas(newDespesas);
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
      <ul>
        {despesas.map((despesa, index) => (
          <li key={index}>
            {despesa.descricao} - R$ {despesa.valor}
            <button onClick={() => handleDelete(index)}>Excluir</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CrudAPagar;
