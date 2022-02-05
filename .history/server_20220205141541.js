const express = require('express')
const app = express()

app.get('/', (req, res) => {
    console.log("first");
    res.render(index)
})

app.listen(3000)