const { User } = require('../models')

class UserController {
  static find(req, res, next) {
    User.findAll()
      .then(users => {
        res.status(200).json(users)
      })
      .catch(err)
  }

  static findById(req, res, next) {
    const id = +req.params.id
    
    User.findByPk(id)
    .then(user => {
      res.status(200).json(user)
    })
    .catch(err)
  }

  static register(req, res, next) {
    const { username, email, password, role } = req.body
    const user = {
      username,
      email,
      password,
      role
    }

    User.create(user)
    .then(user => {
      res.status(201).json(user)
    })
    .catch(err)
  }

  static update(req, res, next) {
    const id = +req.params.id
    const { username, email, password, role } = req.body
    const user = {
      username,
      email,
      password,
      role
    }

    User.update(user, {
      where: {
        id
      }
    })
    .then(user => {
      res.status(200).json(user)
    })
    .catch(err)
  }

  static remove(req, res, next) {
    const id = +req.params.id
    User.destroy(user, {
      where: {
        id
      }
    })
    .then(user => {
      res.status(200).json(user)
    })
    .catch(err)
  }
}

module.exports = { UserController }