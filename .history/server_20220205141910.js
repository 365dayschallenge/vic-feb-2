const express = require('express')
const app = express()

app.get('/', (req, res) => {
    console.log("first");
    res.render("index", {text: "World!"})
})
app.set('view engine', 'ejs')

app.listen(3000)