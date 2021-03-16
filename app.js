const express = require('express')
const routes = require('./routes')
const port = process.env.PORT || 4000

const app = express()

app.use(express.json())
app.use(express.urlencoded({ extended: true}))

app.use('/', routes)

app.listen(port, () => {
  console.log('app listening on port ' + port)
})