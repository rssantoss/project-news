const { MongoClient } = require("mongodb");
const express = require("express");
const app = express();
const cors = require("cors");
//Cryptography
const bcrypt = require('bcrypt');
const saltRounds = 12;

let db;

app.use(cors());
app.use(express.json());

//News
app.get("/getNews", async (req, res) => {
    const allNews = await db.collection("news").find().toArray()
    res.json(allNews);
})

app.get("/admin", (req, res) => {
    res.send("Admin page")
})

//Register authors
app.post("/register", async (req, res) => {
    const { username } = req.body;
    const { password } = req.body;
  
    // Encrypt the password
    const hashedPassword = await bcrypt.hash(password, saltRounds);
  
    // Add user to database
    const newAdmin = { username, password: hashedPassword, isAdmin: true };
    await db.collection("authors").insertOne(newAdmin);
    res.send("Admin registrado com sucesso");
  });

async function start () {
    //Connect and Start
    const client = new MongoClient("mongodb://root:root@localhost:27017/NewsApp?&authSource=admin")
    await client.connect()
    db = client.db()
    app.listen(3001, () => {
        console.log("Running")
    })
}




start()