import { ProjectModel } from "./proyecto.js";
const resolversProyecto = {
  Query: {
    Proyectos: async (parent, args) => {
      const proyectosEncontrados = await ProjectModel.find()
        .populate("lider")
        .populate("avances")
        .populate("inscripciones");
      return proyectosEncontrados;
    },
    Proyecto: async (parent, args) => {
      const proyectoEncontrado = await ProjectModel.findOne({
        _id: args._id,
      })
        .populate("lider")
        .populate("avances")
        .populate("inscripciones");
      return proyectoEncontrado;
    },
    ProyectosLider: async (parent, args) => {
      proyectosPorLider = await ProjectModel.find({ lider: args.lider });
    },
  },
  Mutation: {
    crearProyecto: async (parent, args) => {
      const proyectoCreado = await ProjectModel.create({
        nombre: args.nombre,
        fechaInicio: args.fechaInicio,
        fechaFin: args.fechaFin,
        presupuesto: args.presupuesto,
        estado: args.estado,
        fase: args.fase,
        lider: args.lider,
        objetivos: args.objetivos,
      });
      return proyectoCreado;
    },
    eliminarProyecto: async (parent, args) => {
      const proyectoEliminado = await ProjectModel.findByIdAndDelete({
        _id: args._id,
      });
      return proyectoEliminado;
    },
    actualizarProyecto: async (parent, args) => {
      const proyectoActualizado = await ProjectModel.findByIdAndUpdate(
        { _id: args.id },
        {
          nombre: args.nombre,
          fechaInicio: args.fechaInicio,
          fechaFin: args.fechaFin,
          presupuesto: args.presupuesto,
          estado: args.estado,
          fase: args.fase,
          lider: args.lider,
          objetivos: args.objetivos,
        },
        { new: true }
      );
      return proyectoActualizado;
    },
  },
};

export { resolversProyecto };
