import { Schema, model } from "mongoose";
import { Enum_EstadoInscripcion } from "../enums/enums";
import { ProjectModel } from "../proyecto/project";
import { UserModel } from "../usuario/user";

interface Inscripcion {
  fechaIngreso: Date;
  fechaEgreso: Date;
  estado: Enum_EstadoInscripcion;
  proyecto: Schema.Types.ObjectId;
  estudiante: Schema.Types.ObjectId;
}

const inscripcionSchema = new Schema<Inscripcion>({
  fechaIngreso: {
    type: Date,
    required: true,
  },
  fechaEgreso: {
    type: Date,
    required: true,
  },
  estado: {
    type: String,
    enum: Enum_EstadoInscripcion,
    required: true,
  },
  proyecto: {
    type: Schema.Types.ObjectId,
    ref: ProjectModel,
    required: true,
  },
  estudiante: {
    type: Schema.Types.ObjectId,
    ref: UserModel,
    required: true,
  },
});
const inscripcionModel = model(
  "inscripcion",
  inscripcionSchema,
  "inscripciones"
);

export { inscripcionModel };
