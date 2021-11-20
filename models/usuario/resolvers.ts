import { UserModel } from "./user";

const resolversUsers = {
  Query: {
    Usuarios: async () => {
      const usuarios = await UserModel.find();
      return usuarios;
    },
    Usuario: async (parent, args) => {
      const findUser = await UserModel.findOne({ _id: args._id });
      return findUser;
    },
  },

  Mutation: {
    crearUsuario: async (parent, args) => {
      const UsuarioCreado = await UserModel.create({
        nombre: args.nombre,
        apellido: args.apellido,
        identificacion: args.identificacion,
        correo: args.correo,
        rol: args.rol,
      });
      if (Object.keys(args).includes("estado")) {
        UsuarioCreado.estado = args.estado;
      }
      return UsuarioCreado;
    },
    eliminarUsuario: async (parent, args) => {
      const usuarioEliminado = await UserModel.findOneAndDelete({
        _id: args._id,
      });
      return usuarioEliminado;
    },
    editarUsuario: async (parent, args) => {
      const usuarioEditado = await UserModel.findByIdAndUpdate(
        {
          _id: args._id,
        },
        {
          nombre: args.nombre,
          apellido: args.apellido,
          identificacion: args.identificacion,
          correo: args.correo,
          estado: args.estado,
        },
        { new: true }
      );
      return usuarioEditado;
    },
  },
};
export { resolversUsers };
