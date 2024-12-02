import React, { useState } from 'react';
import "./Dashboard.css";

const Dashboard = () => {
  // Definindo os valores iniciais com useState
  const [totalAPagar, setTotalAPagar] = useState(1500);
  const [totalAReceber, setTotalAReceber] = useState(1200);
  
  // Calculo da diferença entre contas a pagar e contas a receber
  const diferenca = totalAReceber - totalAPagar;

  // Determina se está no vermelho
  const status = diferenca < 0 ? "No Vermelho" : "Em Dia";
  const statusClass = diferenca < 0 ? "vermelho" : "em-dia";

  return (
    <div className="container">
      <h2>Dashboard</h2>
      <table>
        <thead>
          <tr>
            <th>Categoria</th>
            <th>Valor (R$)</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Total a Pagar</td>
            <td>
              <input id='tot-a-pag'
                type="number" 
                value={totalAPagar} 
                onChange={(e) => setTotalAPagar(Number(e.target.value))}
              />
            </td>
          </tr>
          <tr>
            <td>Total a Receber</td>
            <td>
              <input id='tot-a-rec'
                type="number" 
                value={totalAReceber} 
                onChange={(e) => setTotalAReceber(Number(e.target.value))}
              />
            </td>
          </tr>
          <tr>
            <td>Diferença</td>
            <td>{diferenca}</td>
          </tr>
        </tbody>
      </table>
      <p className={statusClass} id='stat'>{status}</p>
    </div>
  );
};

export default Dashboard;
