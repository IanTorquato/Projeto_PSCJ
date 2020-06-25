import React from 'react'
import { Route, BrowserRouter } from 'react-router-dom'

import Home from './pages/Home'
import CadastrarMissa from './pages/CadastrarMissa'
import EditarMissa from './pages/EditarMissa'

const Routes = () => {
    return (
        <BrowserRouter>
            <Route component={Home} path="/" exact />
            <Route component={CadastrarMissa} path="/cadastrar-missa" />
            <Route component={EditarMissa} path='/editar-missa' />
        </BrowserRouter>
    )
}

export default Routes