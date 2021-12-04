import mongoose from "mongoose";
import { ProjectModel } from "../proyecto/proyecto.js";
import { UserModel } from "../usuario/usuario.js";

const { Schema, model } = mongoose;

//se crea el esquema de avance

const avanceSchema = new Schema({
  fecha: {
    type: Date,
    required: true,
  },
  descripcion: {
    type: String,
    required: true,
  },
  observaciones: [
    {
      type: String,
    },
  ],
  proyecto: {
    type: Schema.Types.ObjectId,
    ref: ProjectModel, //referencia el modelo de proyectos
    required: true,
  },
  creadoPor: {
    type: Schema.Types.ObjectId,
    ref: UserModel, // referencia el modelo de usuarios
    required: true,
  },
});

const ModeloAvance = model("Avance", avanceSchema); //modelo de avances

export { ModeloAvance };
