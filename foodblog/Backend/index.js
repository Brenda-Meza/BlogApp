let express = require('express')
let mongoose = require('mongoose')
let cors = require('cors')
let bodyParser = require('body-parser')

const postRoute = require('./routes/post.routes')
const userRoute = require("./routes/user.routes")

mongoose
  .connect('mongodb+srv://ihawki534:hRZlKxVy9cloHlT6@cluster0.su3a1if.mongodb.net/BlogPost')
  .then((x) => {
    console.log(`Connected to Mongo! Database name: "${x.connections[0].name}"`,)
  })
  .catch((err) => {
    console.error("Error connecting to mongo", err.reason)
  })

const app = express()
app.use(bodyParser.json())
app.use(
  bodyParser.urlencoded({extended: true})
)
app.use(cors())

app.use('/posts', postRoute)
app.use('/users', userRoute)



const port = process.env.PORT || 4000
const server = app.listen(port, () => {
  console.log("Connected to port " + port)
})

app.use(function (err, req, res, next) {
  console.error(err.message)
  if (!err.statusCode) err.statusCode = 500
  res.status(err.statusCode).send(err.message)
})