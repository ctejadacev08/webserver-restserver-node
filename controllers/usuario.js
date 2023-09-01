const { request, response } = require("express");

const usuarioGet = (req = request, res = response) => {
  //res.send("Hello christian tejada");
  const query = req.query;
  res.json({
    msg: "get api - controller",
    query,
  });
};

const usuarioPost = (req, res = response) => {
  //const body = req.body;
  const { nombre, codigo } = req.body;
  //res.send("Hello christian tejada");
  res.status(201).json({
    msg: "post api - controller",
    nombre,
    codigo,
  });
};

const usuarioPut = (req = request, res = response) => {
  //res.send("Hello christian tejada");
  const id = req.params.id;
  res.status(201).json({
    msg: "put api - controller",
    id,
  });
};

const usuarioDelete = (req, res = response) => {
  //res.send("Hello christian tejada");
  res.json({
    msg: "delete api - controller",
  });
};

const usuarioPatch = (req, res = response) => {
  //res.send("Hello christian tejada");
  res.json({
    msg: "patch api - controller",
  });
};

module.exports = {
  usuarioGet,
  usuarioPost,
  usuarioPut,
  usuarioDelete,
  usuarioPatch,
};
