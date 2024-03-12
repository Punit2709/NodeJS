const express = require('express');
const { connectToMongoDB } = require('./connect')
const urlRoute = require('./routes/url')
const URL = require('./models/url')
const { handleGetAnalytics } = require('./controlles/url')

const app = express()
const PORT = 3000;

app.use(express.json())
connectToMongoDB('mongodb://127.0.0.1:27017/Short-URL').then(() => console.log('MongoDB Connected'))


app.use('/url', urlRoute);

app.get('/:shortId', async (req, res) => {
    const shortId = req.params.shortId;
    const entry = await URL.findOneAndUpdate({
        shortId,
    }, {
        $push: {
            visitHistory: { timestamp: Date.now() }
        }
    })

    res.redirect(entry.redirectURL)
})

app.get('/analytic/:shortId', handleGetAnalytics);

app.listen(PORT, () => console.log('App Started'));