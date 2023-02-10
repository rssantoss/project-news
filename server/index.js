require('dotenv').config();
const express = require("express");
const app = express();
const session = require('express-session');
const cors = require("cors");
const mongoose = require('mongoose');
const Author = require('./models/Author');
const New = require('./models/New');
const jwtDecode = require('jwt-decode');

//Cryptography
const bcrypt = require('bcrypt');
const saltRounds = 12;
const {
    verifyPassword,
    hashedPassword,
    createToken
} = require('./models/Authentication');

app.use(cors());
app.use(express.json());
app.use(
    session({
        secret: process.env.SESSION_SECRET,
        saveUninitialized: true,
        resave: false,
        cookie: {
            httpOnly: true,
            maxAge: parseInt(process.env.SESSION_MAX_AGE)
        }
    })
);

app.use((req, res, next) => {
    console.log(req.session);
    next();
})

app.post('/api/authenticate', async (req, res) => {
    try {
        const { username, password } = req.body;

        const author = await Author.findOne({
            username
        }).lean();

        if (!author) {
            return res.status(403).json({
                message: 'Usuário ou senha incorretos.'
            });
        }

        const passwordValid = await verifyPassword(
            password,
            author.password
        );

        if (passwordValid) {
            const { password, bio, ...rest } = author;
            const authorInfo = Object.assign({}, { ...rest });

            const token = createToken(authorInfo);

            const decodedToken = jwtDecode(token);
            const expiresAt = decodedToken.exp;
            
            req.session.author = authorInfo;

            res.json({
                message: 'Autenticação bem sucedida!',
                token,
                authorInfo,
                expiresAt
            });
        } else {
            res.status(403).json({
                message: 'Usuário ou senha incorretos.'
            });
        }

    } catch (err) {
        console.log(err);
        return res
            .status(400)
            .json({ message: 'Algo deu errado.' });
    }
})


//News
app.get("/getNews", async (req, res) => {
    try {
        const allNews = await New.find({});
        res.json(allNews);
    } catch (error) {
        res.status(500).send(error.message);
    }
});

app.get("/admin", (req, res) => {
    res.send("Admin page")
})

//Register authors

app.post("/register", async (req, res) => {
    const { username, password } = req.body;

    // Create a new user instance
    const author = new Author({
        username,
        password: hashedPassword,
        isAdmin: true
    });

    // Save the user to the database
    try {
        await author.save();
        res.send("Autor registrado com sucesso");
    } catch (error) {
        console.error(error);
        res.status(500).send("Erro ao registrar o Autor");
    }
});

async function start() {
    await mongoose.connect(process.env.MONGODB_URI, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    });
    console.log("Conectado ao MongoDB");
    app.listen(3001, () => {
        console.log("Rodando na porta 3001");
    });
}

start()