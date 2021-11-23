import mongoose from 'mongoose';
import { ProjectModel } from '../proyecto/proyecto.js';
import { UserModel } from '../usuario/usuario.js';

const { Schema, model } = mongoose;

//se cre el esquema de inscripcion
const inscriptionSchema = new Schema({

  proyecto: {
    type: Schema.Types.ObjectId,
    ref: ProjectModel, //referencia al modelo de proyectos
    required: true,
  },
  estudiante: {
    type: Schema.Types.ObjectId,
    ref: UserModel, //referencia al modelo de usuarios 
    required: true,
  },

  estado: {
    type: String,
    enum: ['ACEPTADO', 'RECHAZADO', 'PENDIENTE'],// se coloca pendiente porque está por defecto
    default: 'PENDIENTE',
    required: true,
  },
  fechaIngreso: {
    type: Date,
    required: false,
  },
  fechaEgreso: {
    type: Date,
    required: false,
  },
  
  
});

const InscriptionModel = model('Inscripcion', inscriptionSchema); //modelo de inscripción

export { InscriptionModel };
