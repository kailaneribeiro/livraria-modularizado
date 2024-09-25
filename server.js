const app = require ("./src/app")
const mongoose = require ("mongoose")

mongoose 
    .connect ("mongodb://localhost:27017/livros")
    .then (() => console.log("Conectado ao mongodb"))
    .catch ((erro) => console.error("Erro ao conectar ao mongodb:", erro))

    const port = 3000
    app.listen(port, () => console.log(`servidor rodando na porta ${port}`))