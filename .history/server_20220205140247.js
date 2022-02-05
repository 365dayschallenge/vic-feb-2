const express = require('express')
const app = express()

app.get('/', (req, res) => {
    console.log("first");
})

app.listen(3000)