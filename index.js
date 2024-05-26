require('dotenv').config()

const express = require('express')
const app = express()
const port = 5000

app.get('/', (req, res) => {
  res.send('Hello World! Kamrul')
})

app.get('/mk', (req, res)=>{
    res.send('Hey MK')
})

app.get('/login', (req, res)=>{
    res.send('<h1>Please login</h1>')
})

app.get('/registration', (req, res)=>{
    res.send('registration')
})

app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${port}`)
})