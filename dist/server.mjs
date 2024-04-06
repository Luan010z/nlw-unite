import {
  registerForEvent
} from "./chunk-4Z3BFBJ7.mjs";
import {
  errorHandler
} from "./chunk-DCESXLGD.mjs";
import {
  checkIn
} from "./chunk-NXDWW7EG.mjs";
import {
  createEvent
} from "./chunk-TAU7LCIJ.mjs";
import "./chunk-3XHCE7VP.mjs";
import {
  getAttendeeBadge
} from "./chunk-ZNFJ5MGI.mjs";
import {
  getEventAttendees
} from "./chunk-K2TZ22GO.mjs";
import {
  getEvent
} from "./chunk-SPX7ECLH.mjs";
import "./chunk-6OJH4T5L.mjs";
import "./chunk-JV6GRE7Y.mjs";

// src/server.ts
import fastify from "fastify";
import fastifySwagger from "@fastify/swagger";
import fastifySwaggerUI from "@fastify/swagger-ui";
import fastifyCors from "@fastify/cors";
import { serializerCompiler, validatorCompiler, jsonSchemaTransform } from "fastify-type-provider-zod";
var app = fastify().withTypeProvider();
app.register(fastifyCors, {
  origin: "*"
});
app.register(fastifySwagger, {
  swagger: {
    consumes: ["application/json"],
    produces: ["application/json"],
    info: {
      title: "pass.in",
      description: "The pass.in is an application for managing participants in in-person events.",
      version: "1.0.0"
    }
  },
  transform: jsonSchemaTransform
});
app.register(fastifySwaggerUI, {
  routePrefix: "/docs"
});
app.setValidatorCompiler(validatorCompiler);
app.setSerializerCompiler(serializerCompiler);
app.register(createEvent);
app.register(registerForEvent);
app.register(getEvent);
app.register(getAttendeeBadge);
app.register(checkIn);
app.register(getEventAttendees);
app.setErrorHandler(errorHandler);
app.listen({ port: 3333, host: "0.0.0.0" }).then(() => {
  console.log("HTTP server running!");
});
export {
  app
};
