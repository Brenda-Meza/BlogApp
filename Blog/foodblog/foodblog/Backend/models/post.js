const mongoose = require('mongoose')
const Schema = mongoose.Schema

// ================================= Connect to Mongo Database ================================= \\
mongoose
.connect('mongodb+srv://ihawki534:P7smCvKCxzW098wB@cluster0.su3a1if.mongodb.net/BlogPost')
.then((x) => {
  console.log(`Connected to Mongo! Database name: "${x.connections[0].name}`)
})
.catch((err) => {
  console.error("Error connecting to mongo", err.reason)
})
// ============================================================================================= //


// ================ Post Schema ================ \\
let postSchema = new Schema({
  title: {
    type: String
  },
  recipe: {
    type: String
  },
  desc: {
    type: String
  },
  tags: {
    type: [String]
  },
  imageURL: {
    type: String
  }
}, {
    collection: 'posts',
    timestamps: true
  })               
// ============================================= //

module.exports = mongoose.model('post', postSchema)