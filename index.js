'use strict'

const mongoose = require('mongoose')
const app = require('./app')
const port = process.env.PORT || 3001
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://127.0.0.1:27017/blog', (err, res) => {
	if(err) throw err
	console.log('Conexión a la base de datos establecida...')

	app.listen(port,() => {
		console.log(`API REST corriendo en http://localhost:${port}`)
	})
});
