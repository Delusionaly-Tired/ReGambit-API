const express = require('express')
const passport = require('passport')

const Opening = require('../models/openings.js')

const customErrors = require('../../lib/custom_errors')

const handle404 = customErrors.handle404
const requireOwnership = customErrors.requireOwnership

const removeBlanks = require('../../lib/remove_blank_fields')

const requireToken = passport.authenticate('bearer', { session: false })

const router = express.Router()

// CREATE
// POST /posts
router.post('/posts', requireToken, (req, res, next) => {
  const postData = req.body.post
  postData.owner = req.user._id
  const openingID = postData.openingId
  console.log(postData)
  console.log(openingID)

  Opening.findById(openingID)
  .then(handle404)
  .then(opening => {
    opening.posts.push(postData)
    return opening.save()
  })
  .then((opening) => res.status(201).json({ opening }))
  .catch(next)
})

// // UPDATE
// // PATCH /posts/5a7db6c74d55bc51bdf39793
router.patch('/posts/:id', requireToken, (req, res, next) => {
  const postData = req.body.post
  const openingID = postData.openingId
  const postID = req.params.id
  console.log(postID)
  Opening.findById(openingID)
    .then(handle404)
    .then(opening => {
      const post = opening.posts.id(postID)
      post.set(postData)
      return opening.save()
    })
    .then(() => res.sendStatus(204))
    .catch(next)
})

// DESTROY
// DELETE /posts/5a7db6c74d55bc51bdf39793
router.delete('/posts/:id', requireToken, (req, res, next) => {
  const postID = req.params.id
  console.log(req.body)
  const openingID = req.body.posts.openingId

  Opening.findById(openingID)
    .then(handle404)
    .then(opening => {
      requireOwnership(req, post)
      opening.posts.id(postID).remove()
      return opening.save()
    })
    .then(() => res.sendStatus(204))
    .catch(next)
})

module.exports = router
