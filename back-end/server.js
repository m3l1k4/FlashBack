const express = require('express')
const app = express()
const port = process.env.PORT || process.argv[2] || 8080
const bodyParser = require('body-parser')

const requests = require('./API/requests.json');


app.use(bodyParser.json());



app.get('/requests', (req, res) => {
  res.json(requests)

})





app.post('/requests', (req, res) => {
  const { id, name, game, email  } = req.body
  requests.push(
    {
      id,
      name,
      game,
      email
      
    }
  )




  res.json(requests)

})



app.listen(port, () => console.log(`Listening on ${port}`))