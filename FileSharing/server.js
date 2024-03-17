require('dotenv').config()

const express = require("express");
const multer = require("multer");
const mongoose = require("mongoose")
const bcrypt = require("bcrypt")
const File = require('./models/file');
const app = express();

mongoose.connect('mongodb://127.0.0.1/filesharing');

app.set("view engine", "ejs")

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
    console.log(`${req.headers.origin}/uploads/${file.id}`);
    res.render("index", { fileLink: `${req.headers.origin}/file/${file.id}` })
})

app.get('/file/:id', async (req, res) => {
    const file = await File.findById(req.params.id);
    file.downloadCount++;
    await file.save();
    console.log(file.downloadCount)

    res.download(file.path, file.originalName);
})

app.listen(3000, console.log("Server Started at Port : 3000"))

