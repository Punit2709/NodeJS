require('dotenv').config()

const express = require("express");
const multer = require("multer");
const mongoose = require("mongoose")
const bcrypt = require("bcrypt")
const File = require('./models/file');
const app = express();

app.use(express.urlencoded({ extended: true }))
app.set("view engine", "ejs")

mongoose.connect('mongodb://127.0.0.1/filesharing');

const uploads = multer({ dest: "uploads" });

app.get("/", (req, res) => {
    res.render("index")
})

app.post("/upload", uploads.single("file"), async (req, res) => {
    const fileData = {
        path: req.file.path,
        originalName: req.file.originalname,
    }

    if (req.body.password != null && req.body.password !== "") {
        fileData.password = await bcrypt.hash(req.body.password, 10)
    }

    const file = await File.create(fileData);
    res.render("index", { fileLink: `${req.headers.origin}/file/${file.id}` })
})

async function handlePassword(req, res) {
    const file = await File.findById(req.params.id);
    console.log(file.password)

    if (file.password != null) {
        if (req.body.password == null) {
            res.render("password")
            return 
        }

        if (!await bcrypt.compare(req.body.password, file.password)) {
            res.render("password", { error: true })
            return 
        }
    }

    file.downloadCount++;
    await file.save();
    console.log(file.downloadCount)

    res.download(file.path, file.originalName);
}

app.get('/file/:id', handlePassword)
app.post('/file/:id', handlePassword)

app.listen(3000, console.log("Server Started at Port : 3000"))

