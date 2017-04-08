'use strict'

const mongoose = require('mongoose')
const Schema = mongoose.Schema
const bcrypt = require('bcryptjs')

const usuarioSchema = Schema({
	nombre: String,
	email: { type: String, unique: true, lowercase: true},
	password: { type: String, select: false },
	fregistro: { type: Date, default: Date.now() },
	rol: {type: Schema.Types.ObjectId, ref: "Rol"}
	
})



usuarioSchema.methods.errorHandler = function(mensaje, err, res){
	res.status(500).send({error: mensaje});
	console.log(err.message);
}

module.exports = mongoose.model('Usuario', usuarioSchema)
