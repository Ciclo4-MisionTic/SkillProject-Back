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
    objetivos: Objetivos
  }
  enum Enum_EstadoProyecto {
    ACTIVO
    INACTIVO
  }
  enum Enum_FaseProyecto {
    INICIADO
    EN_DESARROLLO
    TERMINADO
    NULO
  }
  type Objetivos {
    _id: ID!
    descripcion: String
    tipo: String!
  }

  input InputObjetivos {
    descripcion: String
    tipo: String!
  }

  type Query {
    Proyectos: [Proyecto]
    Proyecto(_id: String!): Proyecto
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
