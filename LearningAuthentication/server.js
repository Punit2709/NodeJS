const express = require("express")
const connectDB = require('./db')

const app = express()
app.use(express.json())
app.use("/api/auth", require("./Auth/Route"))

const PORT = 5000

connectDB()
const server = app.listen(PORT, () => console.log(`Server Connected to port ${PORT}`))

process.on("unhandledRejection", err => {
    console.log(`An error occured, ${err.message}`)
    server.close(() => process.exit(1))
})