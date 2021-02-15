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
  console.log(req.body)

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
router.patch('/posts/:postId', requireToken, (req, res, next) => {
  const postData = req.body.post
  const openingID = postData.openingId
  const postId = req.params.postid

  console.log(postID)

  Opening.findById(openingID)
    .then(handle404)
    .then(opening => {
      const post = opening.posts.id(postId)
      post.set(postData)
      return opening.save()
    })
    .then(() => res.sendStatus(201))
    .catch(next)
})

// DESTROY
// DELETE /posts/5a7db6c74d55bc51bdf39793
router.delete('/posts/:postId', requireToken, (req, res, next) => {
  const postId = req.params.postid
  const openingID = req.body.post.openingId

  Opening.findById(openingID)
    .then(handle404)
    .then(opening => {
      const post = opening.posts.id(postId)
      post.remove()
      return opening.save()
    })
    .then(post => res.sendStatus(201).json({ post: post }))
    .catch(next)
})

module.exports = router
