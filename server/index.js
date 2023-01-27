const express = require("express")
const app = express()

app.get("/", (req, res) => {
    res.send("Homepage")
})

app.get("/admin", (req, res) => {
    res.send("Admin page")
})

app.listen(3000)