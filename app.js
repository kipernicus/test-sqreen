require('sqreen')
const express = require('express')

const PORT = process.env.PORT || 8000
const app = express()
app.get('/', (req, res) => res.send('Hello World'))

app.listen(PORT, () => {
    console.log(`RUNNING ON PORT ${PORT}`)
})