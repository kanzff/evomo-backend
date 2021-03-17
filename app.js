const express = require('express')
const routes = require('./routes')
const { errorHandler } = require('./middlewares/error_handlers')
const port = process.env.PORT || 4000

const app = express()

app.use(express.json())
app.use(express.urlencoded({ extended: true}))

app.use('/', routes)
app.use(errorHandler)

app.listen(port, () => {
  console.log('app listening on port ' + port)
})