const express = require('express')
const mongoose = require('mongoose')
const Student = require('./model/student')
const app = express()

app.use(express.urlencoded({ extended: true }))

app.set('view engine', 'ejs')

app.get('/result', (req, res) => {
    res.render("result");
})

app.post('/result', async (req, res) => {
    const roll = Number(req.body.roll);
    if(roll < 61){
        const student = await Student.find({ 'roll': roll });
        const data = student[0];
        res.render('studentRes', {data : data})
    } else{
        res.render("notFound")
    }
})

app.listen(3000, console.log('Server run on 3000 port'))