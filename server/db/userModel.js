const Sequelize = require('sequelize')
const db = require('./database')
const crypto = require('crypto')



const User = db.define('user', {
    email: {
        type: Sequelize.STRING,
        unique: true,
        allowNull: false
    },
    password: {
        type: Sequelize.STRING,
        // Making `.password` act like a func hides it when serializing to JSON.
        // This is a hack to get around Sequelize's lack of a "private" option.
        get() {
          return () => this.getDataValue('password')
        }
    },
    salt: {
        type: Sequelize.STRING,
        // Making `.salt` act like a function hides it when serializing to JSON.
        // This is a hack to get around Sequelize's lack of a "private" option.
        get() {
          return () => this.getDataValue('salt')
        }
      },
    googleId: {
        type: Sequelize.STRING
    }
})

module.exports = {User}

// instance methods
User.prototype.correctPassword = function (candidatePassword) {
    // should return true or false for if the entered password matches
    return User.encryptPassword(candidatePassword, this.salt()) === this.password()
  };
  
//   class methods
  User.generateSalt = function () {
    // this should generate our random salt
    return crypto.randomBytes(16).toString('base64')
  };
  
  User.encryptPassword = function (plainText, salt) {
    // accepts a plain text password and a salt, and returns its hash
    return crypto
    .createHash('RSA-SHA256')
    .update(plainText)
    .update(salt)
    .digest('hex')
  };
  
  function setSaltAndPassword (user) {
    // we need to salt and hash again when the user enters their password for the first time
    // and do it again whenever they change it
    if (user.changed('password')) {
        user.salt = User.generateSalt()
        user.password = User.encryptPassword(user.password(), user.salt())
      }
  }

  User.beforeCreate(setSaltAndPassword)
  User.beforeUpdate(setSaltAndPassword)
  User.beforeBulkCreate(users => {
    users.forEach(setSaltAndPassword)
  })