const express = require('express')
const app = express()
const port = process.env.PORT || process.argv[2] || 8080
const bodyParser = require('body-parser')
app.use(bodyParser.json());





app.listen(port, () => console.log(`Listening on ${port}`))