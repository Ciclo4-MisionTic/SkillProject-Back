import { gql } from "apollo-server-express";

const tipoInscripcion = gql`
  type Inscripcion {
    _id: ID!
    fechaIngreso: Date!
    fechaEgreso: Date!
    estado: Enum_EstadoInscripcion!
    proyecto: Proyecto!
    estudiante: Usuario!
  }

  type Query {
    Inscripciones: [Inscripcion]
    Inscripcion(_id: String!): Inscripcion
  }

  type Mutation {
    crearInscripcion(
      fechaIngreso: Date!
      fechaEgreso: Date!
      proyecto: String!
      estado: Enum_EstadoInscripcion!
      estudiante: String!
    ): Inscripcion

    editarInscripcion(
      fechaIngreso: Date!
      fechaEgreso: Date!
      estado: Enum_EstadoInscripcion!
      proyecto: String!
      estudiante: String!
    ): Inscripcion

    eliminarInscripcion(_id: String!): Inscripcion
  }
`;
export { tipoInscripcion };
