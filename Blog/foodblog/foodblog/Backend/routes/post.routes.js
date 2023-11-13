let mongoose = require('mongoose')
  express = require('express')
  router = express.Router()

let postSchema = require('../models/post')

router.route('/create-post').post(async (req, res, next) => {
  // console.log(req.body.tags);
  const {userForm, tags} = req.body;


  await postSchema
    .create({
      title: userForm.title,
      desc: userForm.desc,
      recipe: userForm.recipe,
      tags: tags
    })
    .then((result) => {
      res.json({
        data: result,
        message: "Data successfully added.",
        status: 200,
      })
    })
    .catch((err) => {
      return next(err)
    })
})


//get all post
router.route('/').get(async (req, res, next) => {
  // find({tags: $in: {tag}})
  await postSchema
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

//get all post w/ search query
router.route('/search/:searchText').get(async (req, res, next) => {
  // find({tags: $in: {tag}})
  await postSchema
    .find({ title: { $regex: req.params.searchText, $options: "i"}})
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

router.route('/get-post/:id').get(async (req, res, next) => {
  await postSchema
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


router.route('/update-post/:id').post(async (req, res, next) => {
  await postSchema
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


router.route('/delete-post/:id').delete(async (req, res, next) => {
  await postSchema
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