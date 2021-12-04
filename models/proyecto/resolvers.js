import { ProjectModel } from "./proyecto.js";
const resolversProyecto = {
  Query: {
    Proyectos: async (parent, args) => {
      const proyectosEncontrados = await ProjectModel.find().populate([
        {
          path: "avances",
          populate: [{ path: "creadoPor" }],
        },
        { path: "lider" },
        // { path: "inscripciones",populate:[{}] },
      ]);
      return proyectosEncontrados;
    },
    Proyecto: async (parent, args) => {
      const proyectoEncontrado = await ProjectModel.findOne({
        _id: args._id,
      })
        .populate("lider")
        .populate("avances");
      // .populate("inscripciones");
      return proyectoEncontrado;
    },
    ProyectosLider: async (parent, args) => {
      proyectosPorLider = await ProjectModel.find({ lider: args.lider });
    },
  },
  Mutation: {
    crearProyecto: async (parent, args) => {
      const proyectoCreado = await ProjectModel.create({
        ...args.campos,
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
          ...args.campos,
        },
        { new: true }
      );
      return proyectoActualizado;
    },
    crearObjetivos: async (parent, args) => {
      const objetivosCreados = await ProjectModel.findByIdAndUpdate(
        args.idProyecto,
        {
          $addToSet: {
            objetivos: { ...args.campos },
          },
        },
        { new: true }
      );
      return objetivosCreados;
    },
    actualizarObjetivos: async (parent, args) => {
      const objetivosActualizados = await ProjectModel.findByIdAndUpdate(
        { id: args.idProyecto, objetivos: args.idObjetivo },
        {
          $set: {
            "objetivos.$.descripcion": args.campos.descripcion,
            "objetivos.$.tipo": args.campos.tipo,
          },
        },
        { new: true }
      );
      return objetivosActualizados;
    },
    // eliminarObjetivos: async (parent, args) => {
    //   const objetivosEliminados = await ProjectModel.findByIdAndUpdate(
    //     args.idProyecto,
    //     {
    //       $addToSet: {
    //         objetivos: { ...args.campos },
    //       },
    //     },
    //     { new: true }
    //   );
    //   return objetivosEliminados;
    // },
  },
};

export { resolversProyecto };
