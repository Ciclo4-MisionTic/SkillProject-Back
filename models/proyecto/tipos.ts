import { gql } from "apollo-server-core";

const tipoProyecto = gql`
  type Proyecto {
    _id: ID!
    nombre: String!
    presupuesto: Float!
    fechaInicio: Date!
    fechaFin: Date!
    estado: Enum_EstadoProyecto
    fase: Enum_FaseProyecto
    lider: Usuario!
    objetivos: [Objetivo]
    avances: [Avance]
    inscripciones: [Inscripcion]
  }

  type Objetivo {
    _id: ID!
    descripcion: String!
    tipo: String!
  }

  input crearObjetivo {
    descripcion: String!
    tipo: String!
  }

  type Query {
    Proyectos: [Proyecto]
    Proyecto(_id: String!): Proyecto
    # query para traer todos los proyectos de un lider
    ProyectosLider(lider: String!): [Proyecto]
  }

  type Mutation {
    crearProyecto(
      nombre: String!
      presupuesto: Float!
      fechaInicio: Date!
      fechaFin: Date!
      estado: Enum_EstadoProyecto
      fase: Enum_FaseProyecto
      lider: String!
      objetivos: [crearObjetivo]
    ): Proyecto

    eliminarProyecto(_id: String!): Proyecto

    actualizarProyecto(
      _id: String
      nombre: String
      presupuesto: Float
      fechaInicio: Date
      fechaFin: Date
      estado: Enum_EstadoProyecto
      fase: Enum_FaseProyecto
      lider: String
      objetivos: [crearObjetivo]
    ): Proyecto
  }
`;
export { tipoProyecto };
