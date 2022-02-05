const express = require('express')
const app = express()

app.get('/', (req, res) => {
    console.log("first");
    res.json({
        amount: 100
    })
})

app.listen(3000)