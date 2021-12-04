import { InscriptionModel } from './inscripcion.js';




const resolverInscripciones = {
  Query: {
    //Llamar todas las inscripciones: importante para las validaciones en proyecto y avance
    Inscripciones: async (parent, args) => {
      const inscripciones = await InscriptionModel.find().populate('proyecto').populate('estudiante');
    
      return inscripciones;
    },

    //Llamar a las inscripciones de solo un proyecto, puede servir de filtro para ingresar avances 
    //HU_015
    InscripcionesAUnProyecto: async (parent, args) => {
      const inscripcion = await InscriptionModel.find({ proyecto: args.proyecto }).populate('estudiante').populate('proyecto');
      return inscripcion;
    },
   
  },
  Mutation: {

    //Crea una inscripción, sale en la tabla de proyectos 
    //HU_20
    crearInscripcion: async (parent, args) => {
      const inscripcionCreada = await InscriptionModel.create({
        estado: "PENDIENTE",
        proyecto: args.proyecto,
        estudiante: args.estudiante,
        fechaEgreso: null,
        fechaIngreso:null,
      });
      return inscripcionCreada;
    },

    //Edición de una inscripción para aprobarla en un proyecto, resive el id de la inscripción 
    // modifica el estado a "ACEPTADO" y fechaIngreso con la fecha de aprobación 
    //HU_16
    aprobarInscripcion: async (parent, args) => {
      const inscripcionAprobada = await InscriptionModel.findByIdAndUpdate(args.id, {
        estado: 'ACEPTADO',
        fechaIngreso: Date.now(),
      },
        { new: true }
      );
      return inscripcionAprobada;
    },

    //Edición de una inscripción para rechazarla en un proyecto, resive el id de la inscripción 
    // modifica el estado a "RECHAZADO"  
    //HU_16
    rechazarInscripcion: async (parent, args) => {
      const inscripcionRechazada = await InscriptionModel.findByIdAndUpdate(args.id, {
        estado: 'RECHAZADO',

      },
        { new: true }
      );
      return inscripcionRechazada;
    },


    //Edición que permitiría cambiar el proyecto inscrito (por si se necesita)
    editarInscripcion: async (parent, args) => {
      const inscripcionEditado = await InscriptionModel.findByIdAndUpdate(args._id, {
        proyecto: args.proyecto
      });
      return inscripcionEditado;
    },

    //Complemento para el CRUD, aún no tiene una función, recibe el id de la inscripción a eliminar
    eliminarInscripcion: async (parent, args) => {
      
        const inscripcionEliminada = await InscriptionModel.findOneAndDelete({ _id: args._id });

        return inscripcionEliminada
   
      
    },
    //Editar todas las fechaEgreso de las inscripciones que tengan el estado "ACEPTADO"
    // y no tengan fechaEgreso, fechaEgreso se modifíca por la fecha actual 
    //recibe id del proyecto  
    //Precisión 6)
    egresarInscripciones: async (parent,args)=>{
      const inscripcionesEgresadas = await InscriptionModel.updateMany({
        proyecto:args.proyecto,
        estado: "ACEPTADO",
        fechaEgreso: null,
        
      },{
        $set:{"fechaEgreso": Date.now()}}
    );
        //console.log("esto regra egresar inscripciones", inscripcionesEgresadas)
        return inscripcionesEgresadas
    },

    //Egresa inscripciones en general cuando el proyecto cambie de fase 
    //Entra como parámetro el id del proyecto 

    egresarInscripcionesFaseProyecto: async (parent,args)=>{
      const inscripcionesEgresadasFase = await InscriptionModel.updateMany({
        proyecto:args.proyecto,
        
      },{
        $set:{"fechaEgreso": Date.now()}}
    );
        console.log("esto regra egresar inscripciones", inscripcionesEgresadasFase)
        return inscripcionesEgresadasFase
    },
    

  },
};

export { resolverInscripciones };
