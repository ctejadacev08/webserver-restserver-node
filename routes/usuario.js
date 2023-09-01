const { Router } = require("express");
const {
  usuarioGet,
  usuarioPost,
  usuarioPut,
  usuarioDelete,
  usuarioPatch,
} = require("../controllers/usuario");

const router = Router();

router.get("/", usuarioGet);
//POST: sirve para crear nuevos recursos
router.post("/", usuarioPost);
//PUT: sirve para actualizar los recursos
router.put("/:id", usuarioPut);
router.delete("/:id", usuarioDelete);

router.patch("/", usuarioPatch);

module.exports = router;
