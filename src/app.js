const express = require ("express")
const app = express()
const livroRoute = require ('./routes/livroRoutes')

app.use(express.json())
app.use ("/livros", livroRoute)



module.exports = app