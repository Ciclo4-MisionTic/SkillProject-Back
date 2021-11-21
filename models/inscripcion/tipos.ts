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
      _id: ID!
      fechaIngreso: Date!
      fechaEgreso: Date!
      proyecto: Proyecto!
      estado: Enum_EstadoInscripcion!
      estudiante: Usuario!
    ): Inscripcion

    editarInscripcion(
      _id: ID!
      fechaIngreso: Date!
      fechaEgreso: Date!
      estado: Enum_EstadoInscripcion!
      proyecto: Proyecto!
      estudiante: Usuario!
    ): Inscripcion

    eliminarInscripcion(_id: String!): Inscripcion
  }
`;
export { tipoInscripcion };
