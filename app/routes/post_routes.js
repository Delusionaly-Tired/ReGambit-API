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
router.patch('/openings/:id', requireToken, (req, res, next) => {
  const postData = req.body.opening.post

  Opening.find(req.params.id)
    .then(handle404)
    .then(opening => {
      opening.posts.push(postData)
      return opening.save()
    })
    .then(() => res.status(201))
    .catch(next)
  })

// UPDATE
// PATCH /posts/5a7db6c74d55bc51bdf39793
router.patch('/openings/:id/posts/:id', requireToken, removeBlanks, (req, res, next) => {
  const postData = req.body.posts
  const openingID = postData.openingID

  const postID = req.params.postID
  Opening.findById(openingID)
    .then(handle404)
    .then(opening => {
      const post = opening.posts.id(postID)
      posts.set(postData)
      return opening.save()
    })
    .then(() => res.sendStatus(204))
    .catch(next)
})

// DESTROY
// DELETE /posts/5a7db6c74d55bc51bdf39793
router.delete('/openings/:id/posts/:id', requireToken, (req, res, next) => {
  const postID = req.params.postID
  const openingID = req.body.posts.openingID

  Opening.findById(openingID)
    .then(handle404)
    .then(opening => {
      // requireOwnership(req, post)
      opening.posts.id(postID).remove()
      return opening.save()
    })
    .then(() => res.sendStatus(204))
    .catch(next)
})

module.exports = router
