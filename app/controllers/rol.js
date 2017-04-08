'use strict'

const Rol = require('../models/rol')

function getRol(req,res){
	Rol.find({"codigo": req.params.id}, (err, rol) => {
		if(err) return res.status(500).send({mensaje: 'Error'})
		if(!rol) return res.status(404).send({mensaje: 'No existen roles'})
		res.send(200,{rol})
	});
}



function getRoles(req,res){
	Rol.find({}, (err, roles) => {
		if(err) return res.status(500).send({mensaje: 'Error'})
		if(!roles) return res.status(404).send({mensaje: 'No existen roles'})
		res.status(200).send({data: roles})
	});
}

function updRol(req,res){
	res.send('actualizar rol')
}

function delRol(req,res){
	res.send('borrar rol')
}

function insRol(req, res){
	let rol = new Rol()
	rol.codigo = req.body.codigo
	rol.nombre = req.body.nombre

	rol.save((err,rolGuardado) => {
		if(err) res.status(500).send({mensaje: 'Error'})

		res.status(200).send({rol: rolGuardado})
	});
}

module.exports = {
	getRol,
	getRoles,
	updRol,
	delRol,
	insRol
}
