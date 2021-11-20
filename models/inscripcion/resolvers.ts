import { inscripcionModel } from "./inscripcion";

const resolversInscription = {
  Query: {
    Inscripciones: async () => {
      const inscripciones = await inscripcionModel.find();
      return inscripciones;
    },
    Inscripcion: async (parent, args) => {
      const inscripcion = await inscripcionModel.find({ _id: args._id });
      return inscripcion;
    },
  },
  Mutation: {
    crearInscripcion: async (parent, args) => {
      const inscipcionCreada = await inscripcionModel.create({
        fechaIngreso: args.fechaIngreso,
        fechaEgreso: args.fechaEgreso,
        proyecto: args.proyecto,
        estado: args.estado,
        estudiante: args.estudiante,
      });
      return inscipcionCreada;
    },
    editarInscripcion: async (parent, args) => {
      const inscipcionEditada = await inscripcionModel.findByIdAndUpdate(
        { _id: args._id },
        {
          fechaIngreso: args.fechaIngreso,
          fechaEgreso: args.fechaEgreso,
          proyecto: args.proyecto,
          estado: args.estado,
          estudiante: args.estudiante,
        },
        { new: true }
      );
      return inscipcionEditada;
    },
    eliminarInscripcion: async (parent, args) => {
      const inscipcionEliminada = await inscripcionModel.findByIdAndDelete({
        _id: args._id,
      });
      return inscipcionEliminada;
    },
  },
};
export { resolversInscription };
