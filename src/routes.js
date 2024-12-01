import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import CadastroConta from './pages/CadastroConta/CadastroConta';
import Login from './pages/Login/Login';
import CrudAReceber from './pages/CrudAReceber/CrudAReceber';
import CrudAPagar from './pages/CrudAPagar/CrudAPagar';
import Dashboard from './pages/Dashboard/Dashboard';


export default class Principal extends React.Component {

    render() {
        return (
            <BrowserRouter>
            <Routes>
                <Route exact path='/' Component={Login}/>
                <Route path='/cadastro' Component={CadastroConta}/> 
                <Route path='/crudareceber' Component={CrudAReceber}/>
                <Route path='/crudapagar' Component={CrudAPagar}/>
                <Route path='/dashboard' Component={Dashboard}/>
            </Routes>
            </BrowserRouter>
          );
    }
}