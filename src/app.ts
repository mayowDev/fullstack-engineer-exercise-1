import { HelloController } from "./controller/hello.controller";
import express from "express";

export function createApp() {
  const helloController = new HelloController();

  const app = express();
  app.use("/", helloController.getRouter());
  return app;
}
