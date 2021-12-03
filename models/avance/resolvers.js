import { ModeloAvance } from './avance.js';

const resolversAvance = {
  Query: {
    Avances: async (parent, args) => {
      const avances = await ModeloAvance.find().populate('proyecto').populate('creadoPor');
      return avances;
    },
    filtrarAvance: async (parents, args) => {
      const avanceFiltrado = await ModeloAvance.find({ proyecto: args._id })
        .populate('proyecto')
        .populate('creadoPor');
      return avanceFiltrado;
    },
  },
  Mutation: {
    crearAvance: async (parents, args) => {
      const avanceCreado = ModeloAvance.create({
        fecha: args.fecha,
        descripcion: args.descripcion,
        observaciones: args.observaciones,
        proyecto: args.proyecto,
        creadoPor: args.creadoPor,
      });
      return avanceCreado;
    },
    editarObservaciones: async (parents, args) => {
      const observacionEditado = await ModeloAvance.findByIdAndUpdate(
          args._id,
          {
            observaciones: args.observaciones,
          },
          { new: true }
        );
  
        return observacionEditado;
    },
    editarDescripcion: async (parents, args) => {
      const descripcionEditado = await ModeloAvance.findByIdAndUpdate(
          args._id,
          {
            descripcion: args.descripcion,
          },
          { new: true }
        );
  
        return descripcionEditado;
    },
    
  },
};

export { resolversAvance };

