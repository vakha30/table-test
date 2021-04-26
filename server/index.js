const express = require('express');
const app = express()

const PORT = process.env.PORT || 3001

const table_model = require('./table_models')

app.use(express.json())
app.use(function (req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');
    res.setHeader('Access-Control-Allow-Methods', 'GET,POST,PUT,DELETE,OPTIONS');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Access-Control-Allow-Headers');
    next();
})

app.get('/table', (req, res) => {
    table_model.getTable(req.body)
    .then(response => {
        res.status(200).send(response)
    })
    .catch(error => {
        res.status(500).send(error)
    })
})

app.post('/table', (req, res) => {
    table_model.sortTable(req.body)
    .then(response => {
        res.status(200).send(response)
    })
    .catch(error => {
        res.status(500).send(error)
    })
})

app.listen(PORT, () => {
    console.log(`App running on port ${PORT}.`);
})
