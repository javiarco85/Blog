'use strict'

const Usuario = require('../models/usuario')
const Rol = require('../models/rol')
const bcrypt = require('bcryptjs')

function getUsuario(req,res){
	let idUsuario = req.params.id

	Usuario.findById(idUsuario, (err,user) => {
		if(err){
			usuario.errorHandler('Error consultando usuario.',err,res)
			return
		}
		Rol.populate(user, {path: "rol"}, function(err,datos){
			if(err){
				usuario.errorHandler('Error consultando rol.',err,res)
				return
			}
			res.status(200).send({data: datos})
		})
	})
}

function getUsuarios(req,res){
	Usuario.find({}, (err,users) => {
		if(err){
			usuario.errorHandler('Error consultando usuarios.',err,res)
			return
		}
		Rol.populate(users, {path: "rol"}, function(err,datos){
			if(err){
				usuario.errorHandler('Error consultando rol.',err,res)
				return
			}
			res.status(200).send({data: datos})
		})
	})
}

function updUsuario(req,res){
	let idUsuario = req.params.id
	let update = req.body
	Usuario.findByIdAndUpdate(idUsuario,update,(err,userUpdate) => {
		if(err){
			usuario.errorHandler('Error actualizando usuario.',err,res)
			return
		}
		res.status(200).send({data: userUpdate})
	})
}

function delUsuario(req,res){
	let idUsuario = req.params.id

	Usuario.findById(idUsuario, (err,user) => {
		if(err){
			usuario.errorHandler('Error consultando usuario.',err,res)
			return
		}
		Usuario.remove(err => {
			if(err){
				usuario.errorHandler('Error eliminando usuario.',err,res)
				return
			}
			res.status(200).send({data: {}, mensaje: 'Usuario eliminado con éxito'})
		})

	})
}

function insUsuario(req, res){

	var salt = bcrypt.genSaltSync(10)
	var pass = bcrypt.hashSync(req.body.password,salt)

	let usuario = new Usuario()
	usuario.nombre = req.body.nombre
	usuario.email = req.body.email
	usuario.password = pass
	usuario.rol = req.body.rol
	console.log(req.body)

	//if(!user.isModified('password')){
	//	return
	//}

	usuario.save((err,userInsert) => {
		if(err){
			usuario.errorHandler('Error insertando usuario.',err,res)
			console.log(err.message)
			return;
		}
		res.status(200).send({data: userInsert})
	});
}



module.exports = {
	getUsuario,
	getUsuarios,
	updUsuario,
	delUsuario,
	insUsuario
}
