const express = require ("express")
const router = express.Router()
const livrosController = require ("../controller/livrosController")

router.post("/", livrosController.cadastrarLivro)

router.get("/",livrosController.buscarLivros)

router.put("/:id",livrosController.atualizarLivro)

router.delete("/:id",livrosController.deletarLivro)

module.exports = router