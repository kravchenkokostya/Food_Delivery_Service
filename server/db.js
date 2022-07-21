const { Sequelize } = require('sequelize')

module.exports = new Sequelize(
	process.env.DB_NAME, // назва БД
	process.env.DB_USER, // користувач БД
	process.env.DB_PASSWORD, // пароль користувача БД
	{
		dialect: 'postgres',
		host: process.env.DB_HOST, // хост БД
		port: process.env.DB_PORT, // порт БД
	}

)