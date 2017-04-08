'use strict'

const express = require('express')
const api = express.Router()

const UsuarioCtrl = require('../app/controllers/usuario')
api.get('/usuario',UsuarioCtrl.getUsuarios)
api.get('/usuario/:id',UsuarioCtrl.getUsuario)
api.post('/usuario',UsuarioCtrl.insUsuario)
api.put('/usuario/:id',UsuarioCtrl.updUsuario)
api.delete('/usuario/:id',UsuarioCtrl.delUsuario)

const RolCtrl = require('../app/controllers/rol')
api.get('/rol',RolCtrl.getRoles)
api.get('/rol/:id',RolCtrl.getRol)
api.post('/rol',RolCtrl.insRol)
api.put('/rol/:id',RolCtrl.updRol)
api.delete('/rol/:id',RolCtrl.delRol)

module.exports = api