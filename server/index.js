const { MongoClient } = require("mongodb")
const express = require("express")
let db

const app = express()
/*
npm install ejs
app.set("view engine", "ejs")
app.set("views", "./views")
*/

//News
app.get("/", async (req, res) => {
    const allAnimals = await db.collection("news").find().toArray()
    //res.render("home")
})

app.get("/admin", (req, res) => {
    res.send("Admin page")
})

async function start () {
    //Connect and Start
    const client = new MongoClient("mongodb://root:root@localhost:27017/NewsApp?&authSource=admin")
    await client.connect()
    db = client.db()
    app.listen(3000)
}
start()