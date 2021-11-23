import express from "express";
import cors from "cors";
//import { ApolloServer } from 'apollo-server-express';
import dotenv from "dotenv";
import conectarBD from "./db/db.js";
import { projectModel } from "./modelos_esquemas/models/project/project.js";
import { tipos } from "./graphql/types.js";
import { resolvers } from "./graphql/resolvers.js";

dotenv.config();

const server = new ApolloServer({
  typeDefs: tipos,
  resolvers: resolvers,
});

const app = express();

app.use(express.json());

app.use(cors());

app.listen({ port: process.env.PORT || 4000 }, async () => {
  await conectarBD();
  await server.start();

  server.applyMiddleware({ app });

  // creacion Proyecto

  // const proyectoX = await projectModel.find({
  //   user:
  // })
  //   .then((p) => {
  //     console.log("proyecto Creado", p);
  //   })
  //   .catch((e) => {
  //     console.error("Error Creando proyecto", e);
  //   });

  console.log("servidor listo");
});
