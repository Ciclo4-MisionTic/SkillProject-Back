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
    # lider: Usuario!
    objetivos: [Objetivos]
    # avances: [Avance]
    # inscripciones: [Inscripcion]
  }
  enum Enum_EstadoProyecto {
    ACTIVO
    INACTIVO
  }
  enum Enum_FaseProyecto {
    INICIADO
    DESARROLLO
    TERMINADO
    NULO
  }
  enum Enum_TipoObjetivos {
    GENERAL
    ESPECIFICO
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

  type Query {
    Proyectos: [Proyecto]
    Proyecto(_id: String!): Proyecto
    ProyectosLider(lider: String!): [Proyecto]
  }

  type Mutation {
    crearProyecto(
      nombre: String!
      fechaInicio: Date!
      fechaFin: Date!
      presupuesto: Float!
      estado: Enum_EstadoProyecto
      fase: Enum_FaseProyecto
      lider: String!
      objetivos: InputObjetivos
    ): Proyecto

    eliminarProyecto(_id: String!): Proyecto

    actualizarProyecto(
      _id: String!
      nombre: String!
      fechaInicio: Date!
      fechaFin: Date!
      presupuesto: Float!
      estado: Enum_EstadoProyecto
      fase: Enum_FaseProyecto
      lider: String!
      objetivos: InputObjetivos
    ): Proyecto
  }
`;
export { tiposProyecto };
