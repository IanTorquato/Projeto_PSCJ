import React from 'react'
import { Route, BrowserRouter } from 'react-router-dom'

import Home from './pages/Home'
import CadastroMissa from './pages/CadastroMissa'

const Routes = () => {
    return (
        <BrowserRouter>
            <Route component={Home} path="/" exact />
            <Route component={CadastroMissa} path="/cadastro-missa" />
        </BrowserRouter>
    )
}

export default Routes