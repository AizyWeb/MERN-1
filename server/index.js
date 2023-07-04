const express = require('express')
const app = express()
const mongoose = require('mongoose')
const URI_CONNECTION = 'mongodb+srv://andresJimenez:Andresillo5@cluster0.zywio13.mongodb.net/mernTutorial?retryWrites=true&w=majority'
const UserModel = require('./models/Users')
const cors = require('cors')

app.use(express.json())
app.use(cors())

mongoose.connect(URI_CONNECTION)

app.get('/getUsers', (req, res) => {
  UserModel.find({}).then((err, result) => {
    if (err) {
      res.json(err)
    } else {
      res.json(result)
    }
  })
})
app.post('/createUser', async (req, res) => {
  const user = req.body
  const newUser = new UserModel(user)
  await newUser.save()
  res.json(user)
})

app.listen(3001, () => {
  console.log('LISTENING')
})

// REQUESTS IN EXPRESS
// app.get()
// app.post()
