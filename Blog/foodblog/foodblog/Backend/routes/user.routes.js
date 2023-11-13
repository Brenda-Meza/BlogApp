let mongoose = require('mongoose')
  express = require('express')
  router = express.Router()

let userSchema = require('../models/users')

router.route('/create-user').post(async (req, res, next) => {
  await userSchema
    .create(req.body)
    .then((result) => {
      res.json({
        data: result,
        message: "Data successfully added.",
        status: 200,
      })
    })
    .catch((err) => {
      console.log(err)
      return next(err)
    })
})


router.route('/').get(async (req, res, next) => {
  await userSchema
    .find()
    .then((result) => {
      res.json({
        data: result,
        message: "All items successfully fetched.",
        status: 200,
      })
    })
    .catch((err) => {
      return next(err)
    })
})


router.route('/get-user/:id').get(async (req, res, next) => {
  await userSchema
    .findById(req.params.id)
    .then((result) => {
      res.json({
        data: result,
        message: "Data successfully fetched.",
        status: 200,
      })
    })
    .catch((err) => {
      return next(err)
    })
})


router.route('/update-user/:id').post(async (req, res, next) => {
  await userSchema
    .findByIdAndUpdate(req.params.id, {
      $set: req.body,
    })
    .then((result) => {
      console.log(result)
      res.json({
        data: result,
        message: "Data successfully updated.",
        status: 200,
      })
    })
    .catch((err) => {
      return next(err)
    })
})


router.route('/delete-user/:id').delete(async (req, res, next) => {
  await userSchema
    .findByIdAndRemove(req.params.id)
    .then(() => {
      res.json({
        message: "Data successfully updated.",
      })
    })
    .catch((err) => {
      return next(err)
    })
})
module.exports = router