const { User } = require('../models')
const { hashPass } = require('../helpers/bcrypt')

class UserController {
  static find(req, res, next) {
    User.findAll({
      attributes: { exclude: ['password'] }
    })
      .then(users => {
        res.status(200).json(users)
      })
      .catch(err => {
        next(err)
      })
  }

  static findById(req, res, next) {
    const id = +req.params.id
    
    User.findByPk(id, {
      attributes: { exclude: ['password'] }
    })
    .then(user => {
      res.status(200).json(user)
    })
    .catch(err => {
      next(err)
    })
  }

  static register(req, res, next) {
    const { username, password, role } = req.body
    const user = {
      username,
      password,
      role
    }

    User.create(user)
    .then(user => {
      res.status(201).json(user)
    })
    .catch(err => {
      next(err)
    })
  }

  static update(req, res, next) {
    const id = +req.params.id
    const { username, password, role } = req.body
    const user = {
      username,
      password: hashPass(password),
      role
    }

    User.update(user, {
      where: {
        id
      }
    })
    .then(user => {
      return User.findByPk(id, {
        attributes: { exclude: ['password'] }
      })
    })
    .then(user => {
      res.status(200).json(user)
    })
    .catch(err => {
      next(err)
    })
  }

  static remove(req, res, next) {
    const id = +req.params.id
    User.destroy({
      where: {
        id
      }
    })
    .then(user => {
      res.status(200).json(user)
    })
    .catch(err => {
      next(err)
    })
  }
}

module.exports = { UserController }