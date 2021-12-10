import { gql } from 'apollo-server-express';

const tiposInscripcion = gql`
  type Inscripcion {
    _id: ID!
    estado: Enum_EstadoInscripcion!
    fechaIngreso: Date
    fechaEgreso: Date
    proyecto: Proyecto!
    estudiante: Usuario!
    contador: Int
   
  }
  type Contador{
    
      acknowledged: Boolean,
      modifiedCount: Int,
      upsertedId: Int,
      upsertedCount: Int,
      matchedCount: Int
    
  }

  type Query {
    Inscripciones: [Inscripcion]
    InscripcionesAUnProyecto(proyecto:String!):[Inscripcion]
    InscripcionesEgreso: [Inscripcion]
  }

  type Mutation {
    crearInscripcion(
      proyecto: String!
    ): Inscripcion

    aprobarInscripcion(id: String!): Inscripcion
    rechazarInscripcion(id: String!): Inscripcion
    editarInscripcion(
      id:String!
      proyecto: String!
      ): Inscripcion
    
      eliminarInscripcion(_id: String!): Inscripcion
      egresarInscripciones(proyecto:String!): Contador
      egresarInscripcionesFaseProyecto(proyecto:String!): Contador
  }
`;

export { tiposInscripcion };
