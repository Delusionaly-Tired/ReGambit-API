const express = require('express')
const passport = require('passport')

const Opening = require('../models/openings.js')

const customErrors = require('../../lib/custom_errors')

const handle404 = customErrors.handle404
const requireOwnership = customErrors.requireOwnership

const removeBlanks = require('../../lib/remove_blank_fields')

const requireToken = passport.authenticate('bearer', { session: false })

const router = express.Router()

// INDEX
// GET /openings
router.get('/openings', requireToken, (req, res, next) => {
  Opening.find()
    .then(openings => {
      return openings.map(opening => opening.toObject())
    })
    .then(openings => res.status(200).json({ openings: openings }))
    .catch(next)
})

// SHOW
// GET /openings/5a7db6c74d55bc51bdf39793
router.get('/openings/:id', requireToken, (req, res, next) => {
  Opening.findById(req.params.id)
    .then(handle404)
    .then(opening => res.status(200).json({ opening: opening.toObject() }))
    .catch(next)
})

// CREATE
// POST /openings
router.post('/openings', requireToken, (req, res, next) => {
  req.body.opening.owner = req.user.id

  Opening.create(req.body.opening)
    .then(opening => {
      res.status(201).json({ opening: opening.toObject() })
    })
    .catch(next)
})

// UPDATE
// PATCH /openings/5a7db6c74d55bc51bdf39793
router.patch('/openings/:id', requireToken, removeBlanks, (req, res, next) => {
  delete req.body.opening.owner

  Opening.findById(req.params.id)
    .then(handle404)
    .then(opening => {
      requireOwnership(req, opening)
      return opening.updateOne(req.body.opening)
    })
    .then(() => res.sendStatus(204))
    .catch(next)
})

// DESTROY
// DELETE /openings/5a7db6c74d55bc51bdf39793
router.delete('/openings/:id', requireToken, (req, res, next) => {
  Opening.findById(req.params.id)
    .then(handle404)
    .then(opening => {
      requireOwnership(req, opening)
      opening.deleteOne()
    })
    .then(() => res.sendStatus(204))
    .catch(next)
})

module.exports = router
