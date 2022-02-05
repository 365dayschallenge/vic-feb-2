const express = require('express')
const app = express()

app.get('/', (req, res) => {
    console.log("first");
    res.send("hii")
})

app.listen(3000)