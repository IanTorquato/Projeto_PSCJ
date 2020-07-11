import React, { useContext } from 'react'

import RoutesDeslogado from './deslogado.routes'
import RoutesLogado from './logado.routes'

import LoginContext from '../contexts/login'

const Routes = () => {
  const { logado, loading } = useContext(LoginContext)

  if (loading) {
    return (
      <div className="carregando">
        <h1>Verificando Login Anterior</h1>
      </div>
    )
  }

  return logado ? <RoutesLogado /> : <RoutesDeslogado />
}

export default Routes