import { Schema, model } from "mongoose";
import {
  Enum_EstadoProyecto,
  Enum_FaseProyecto,
  Enum_TipoObjetivo,
} from "../enums/enums";
import { UserModel } from "../usuario/user";

interface Project {
  nombre: string;
  fechaInicio: Date;
  fechaFin: Date;
  presupuesto: number;
  estado: Enum_EstadoProyecto;
  faseProyecto: Enum_FaseProyecto;
  lider: Schema.Types.ObjectId;
  objetivos: [{ descripcion: String; tipo: Enum_TipoObjetivo }];
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
  faseProyecto: {
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
});
const ProjectModel = model("Project", projectSchema);

export { ProjectModel };
