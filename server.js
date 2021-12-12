const express = require('express');
const cors = require('cors');
// const { application } = require('express');
require("dotenv").config();

const app = express()

var corOptions = {
  origin: 'https://localhost:8081'
}

// middleware
app.use(cors(corOptions))
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

// router
const postRoutes = require('./routes/postRouter.js')
app.use("/api/posts", postRoutes)

// testing api
app.get('/', (req, res) => {
  res.json({message: 'hello test'})
})

// port
const PORT = process.env.PORT || 3000

// server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
})