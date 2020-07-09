import express from 'express'

import Locais from './controllers/locais'
import Missas from './controllers/missas'
import Usuarios from './controllers/usuarios'
import MissaUsuario from './controllers/missa_usuario'

const locais = new Locais()
const missas = new Missas()
const usuarios = new Usuarios()
const missaUsuario = new MissaUsuario()

const routes = express.Router()

routes.get('/locais', locais.index)

routes.post('/missas', missas.create)

routes.get('/missas', missas.index)

routes.get('/missas/:id', missas.show)

routes.post('/usuarios', usuarios.create)

routes.get('/usuarios', usuarios.index)

routes.post('/missa_usuario', missaUsuario.create_update)

export default routes