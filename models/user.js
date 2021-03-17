'use strict';
const {
  Model
} = require('sequelize');
const { hashPass } = require('../helpers/bcrypt')

module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  User.init({
    username: {
      type:DataTypes.STRING,
      unique: {
        args: true, 
        msg: 'username is already registered'
      },
      validate: {
        notEmpty:{
          msg: 'username is required'
        }
      }
    },
    password: {
      type: DataTypes.STRING,
      validate: {
        notEmpty:{
          msg: 'password is required'
        }
      }
    },
    role: {
      type: DataTypes.STRING,
      validate: {
        notEmpty:{
          msg: 'role is required'
        }
      }
    }
  }, {
    hooks: {
      beforeCreate(user){
        user.password = hashPass(user.password)
      }
    },
    sequelize,
    modelName: 'User',
  });
  return User;
};