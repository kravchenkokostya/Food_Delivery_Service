const sequelize = require('../db')
const { DataTypes } = require('sequelize')

const User = sequelize.define(modelName: 'user', attributes: {
	id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
	email: { type: DataTypes.STRING, unique: true },
	tel: { type: DataTypes.STRING, unique: true },
	city: { type: DataTypes.STRING },
	house: { type: DataTypes.STRING },
	password: { type: DataTypes.STRING },
	role: { type: DataTypes.STRING, defaultValue: "USER" }
})

const Cart = sequelize.define(modelName: 'cart', attributes: {
	id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
})

const CartFood = sequelize.define(modelName: 'cart_food', attributes: {
	id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
})

const Food = sequelize.define(modelName: 'food', attributes: {
	id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
	name: { type: DataTypes.STRING, unique: true, allowNull: false },
	price: { type: DataTypes.INTEGER, allowNull: false },
	value: { type: DataTypes.STRING, allowNull: false },
	description: { type: DataTypes.STRING, allowNull: false },
	img: { type: DataTypes.STRING, allowNull: false },
})

const Store = sequelize.define(modelName: 'store', attributes: {
	id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
	name: { type: DataTypes.STRING, unique: true, allowNull: false },
})

User.hasOne(Cart)
Cart.belongsTo(User)

Cart.hasMany(CartFood)
CartFood.belongsTo(Cart)

Store.hasMany(Food)
Food.belongsTo(Store)

Food.hasMany(CartFood)
CartFood.belongsTo(Food)

module.exports = {
	User,
	Cart,
	CartFood,
	Food,
	Stores
}