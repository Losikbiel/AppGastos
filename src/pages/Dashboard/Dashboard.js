import React from 'react';
import "./Dashboard.css";

const Dashboard = () => {
  const totalAPagar = 1000;
  const totalAReceber = 1200;
  const diferenca = totalAReceber - totalAPagar;

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
            <td>{totalAPagar}</td>
          </tr>
          <tr>
            <td>Total a Receber</td>
            <td>{totalAReceber}</td>
          </tr>
          <tr>
            <td>Diferença</td>
            <td>{diferenca}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Dashboard;
