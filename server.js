const express = require('express')
const app = express()

app.get ('/', (req, res) => {
    res.send('Home Psge')
})

app.get('/users', (req, res) => {
    res.send('Users Page')
})

app.listen(3000)