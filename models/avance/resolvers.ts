import { avanceModel } from "./avance";

const resolversAdvancement = {
  Query: {
    Avances: async () => {
      const avances = await avanceModel
        .find()
        .populate("creadoPor")
        .populate("proyecto");
      return avances;
    },
    Avance: async (parent, args) => {
      const avance = await avanceModel.findOne({ _id: args._id });
      return avance;
    },
  },
  Mutation: {
    crearAvance: async (parent, args) => {
      const avanceCreado = await avanceModel.create({
        fecha: args.fecha,
        descripcion: args.descripcion,
        proyecto: args.proyecto,
        observaciones: args.observaciones,
        creadoPor: args.creadoPor,
      });
      return avanceCreado;
    },

    eliminarAvance: async (parent, args) => {
      const avanceEliminado = await avanceModel.findByIdAndDelete({
        _id: args._id,
      });
      return avanceEliminado;
    },

    editarAvance: async (parent, args) => {
      const avanceEditado = await avanceModel.findByIdAndUpdate(
        { _id: args._id },
        {
          fecha: args.fecha,
          descripcion: args.descripcion,
          proyecto: args.proyecto,
          observaciones: args.observaciones,
          creadoPor: args.creadoPor,
        },
        { new: true }
      );

      return avanceEditado;
    },
  },
};
export { resolversAdvancement };
