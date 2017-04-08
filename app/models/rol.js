'use strict'

const mongoose = require('mongoose')
const Schema = mongoose.Schema

const rolSchema = Schema({
	codigo: String,
	nombre: String
})

module.exports = mongoose.model('Rol', rolSchema)