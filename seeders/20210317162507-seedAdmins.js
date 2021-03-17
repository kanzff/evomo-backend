'use strict';

const { hashPass } = require('../helpers/bcrypt')

module.exports = {
  up: async (queryInterface, Sequelize) => {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
    await queryInterface.bulkInsert('Users', [
      {
        username: 'user1',
        password: hashPass('1234'),
        role: 'admin',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        username: 'user2',
        password: hashPass('1234'),
        role: 'superadmin',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        username: 'user3',
        password: hashPass('1234'),
        role: 'director',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        username: 'user4',
        password: hashPass('1234'),
        role: 'head of engineering',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        username: 'user5',
        password: hashPass('1234'),
        role: 'operator',
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ])
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    await queryInterface.bulkDelete('Users', null, {});
  }
};
