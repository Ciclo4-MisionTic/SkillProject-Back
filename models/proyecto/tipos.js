import { gql } from "apollo-server-core";

const tiposProyecto = gql`
  type Proyecto {
    _id: ID!
    nombre: String!
    fechaInicio: Date!
    fechaFin: Date!
    presupuesto: Float!
    estado: Enum_EstadoProyecto
    fase: Enum_FaseProyecto
    lider: Usuario!
    objetivos: [Objetivos]
    avances: [Avance]
    # inscripciones: [Inscripcion]
  }

  type Objetivos {
    _id: ID!
    descripcion: String!
    tipo: Enum_TipoObjetivos!
  }

  input InputObjetivos {
    descripcion: String
    tipo: Enum_TipoObjetivos!
  }

  input camposObjetivos {
    descripcion: String
    tipo: Enum_TipoObjetivos
  }

  input camposProyecto {
    nombre: String
    fechaInicio: Date
    fechaFin: Date
    presupuesto: Float
    estado: Enum_EstadoProyecto
    fase: Enum_FaseProyecto
    lider: String
    objetivos: InputObjetivos
  }
  input camposCreacionProyecto {
    nombre: String!
    fechaInicio: Date!
    fechaFin: Date!
    presupuesto: Float!
    estado: Enum_EstadoProyecto
    fase: Enum_FaseProyecto
    lider: String!
    objetivos: InputObjetivos
  }

  type Query {
    Proyectos: [Proyecto]
    Proyecto(_id: String!): Proyecto
    ProyectosLider(lider: String!): [Proyecto]
  }

  type Mutation {
    crearProyecto(campos: camposCreacionProyecto): Proyecto

    eliminarProyecto(_id: String!): Proyecto

    actualizarProyecto(_id: String!, campos: camposProyecto): Proyecto

    crearObjetivos(idProyecto: String!, campos: camposObjetivos!): Proyecto
  }
`;
export { tiposProyecto };
