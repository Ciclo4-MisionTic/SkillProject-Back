import { Schema, model } from "mongoose";
import { avanceModel } from "../avance/avance";
import {
  Enum_EstadoProyecto,
  Enum_FaseProyecto,
  Enum_TipoObjetivo,
} from "../enums/enums";
import { inscripcionModel } from "../inscripcion/inscripcion";
import { UserModel } from "../usuario/user";

interface Project {
  nombre: string;
  fechaInicio: Date;
  fechaFin: Date;
  presupuesto: number;
  estado: Enum_EstadoProyecto;
  fase: Enum_FaseProyecto;
  lider: Schema.Types.ObjectId;
  objetivos: [{ descripcion: String; tipo: Enum_TipoObjetivo }];
  avance: Schema.Types.ObjectId;
  inscripcion: Schema.Types.ObjectId;
}

const projectSchema = new Schema<Project>({
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
    enum: Enum_EstadoProyecto,
    default: Enum_EstadoProyecto.INACTIVO,
  },
  fase: {
    type: String,
    enum: Enum_FaseProyecto,
    default: Enum_FaseProyecto.NULO,
  },
  lider: {
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
        enum: Enum_TipoObjetivo,
        required: true,
      },
    },
  ],
  // avance: [
  //   {
  //     type: Schema.Types.ObjectId,
  //     ref: avanceModel,
  //     required: true,
  //   },
  // ],
  // inscripcion: [
  //   {
  //     type: Schema.Types.ObjectId,
  //     ref: inscripcionModel,
  //     required: true,
  //   },
  // ],
});
const ProjectModel = model("Project", projectSchema);

export { ProjectModel };
