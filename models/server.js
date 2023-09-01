require("dotenv").config();
const express = require("express");
const cors = require("cors");

class Server {
  constructor() {
    this.app = express();
    this.port = process.env.PORT;
    this.usuariosPath = "/api/usuarios";
    // middlewares
    this.middlewares();
    // rutas
    this.routes();
  }
  //middlewares: son funciones que hacen que mi app tenga otra funcionalidad
  middlewares() {
    // cors
    this.app.use(cors());
    // Lectura y parseo del body
    this.app.use(express.json());
    // Directorio Publico
    this.app.use(express.static("public"));
  }

  routes() {
    this.app.use(this.usuariosPath, require("../routes/usuario"));
  }

  listen() {
    this.app.listen(this.port, () => {
      console.log(
        "Se levanto correctamente el servidor en el puerto :",
        this.port
      );
    });
  }
}

module.exports = Server;
