import mongoose from "mongoose";

const { Schema, model } = mongoose;

const projectSchema = new Schema({
  nombre: {
    type: String,
    required: true,
    unique: true,
  },
  fechaInicio: {
    type: Date,
    required: true,
  },
  fechaFin: {
    type: Date,
    required: true,
  },
  presupuesto: {
    type: Number,
    required: true,
  },
  estado: {
    type: String,
    enum: ["ACTIVO", "INACTIVO"],
    default: "INACTIVO",
  },
  fase: {
    type: String,
    enum: ["INICIADO", "EN_DESARROLLO", "TERMINADO", "NULO"],
    default: "NULO",
  },
  lider: {
    // type: String,
    type: Schema.Types.ObjectId,
    ref: UserModel,
    required: true,
  },
  objetivos: [
    {
      descripcion: {
        type: String,
        required: true,
      },
      tipo: {
        type: String,
        enum: ["GENERAL", "ESPECIFICO"],
        required: true,
      },
    },
  ],
});

const projectModel = model("Project", projectSchema);

export { projectModel };
