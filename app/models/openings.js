const mongoose = require('mongoose')

const postSchema = require('./posts.js')

const openingSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  type: {
    type: String,
    required: true
  },
  skill: {
    type: String,
    required: true
  },
  blogPost: {
    type: String
  },
  posts: [postSchema],
  pgn: {
    type: String
  },
  owner: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  }
}, {
  timestamps: true
})

module.exports = mongoose.model('Opening', openingSchema)
