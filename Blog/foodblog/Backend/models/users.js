const mongoose = require('mongoose')
const Schema = mongoose.Schema

let userSchema = new Schema({
  email: {
    type: String,
    required: true
  },
  name: {
    type: String,
    required: true
  },
  pass: {
    type: String,
    required: true
  },
  confPass: {
    type: String,
    required: true
  }
}, {
    collection: 'users'
  })

module.exports = mongoose.model('user', userSchema)