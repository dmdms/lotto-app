const express = require('express')
const app = express()
const port = 3000
const path = require('path')
app.use(express.static(path.join(__dirname, 'public')))

app.get('/', (req, res) => {
    res.sendFile(__dirname+'/public/index.html')
})

app.get('/join', (req, res) => {
    res.sendFile(__dirname+'/public/register.html')
})

app.get('/login', (req, res) => {
  res.sendFile(__dirname+'/public/register.html')
})

app.get('/add_user', (req, res) => {
  res.sendFile(__dirname+'/public/register.html')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})