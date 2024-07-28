import express, { Express } from "express";
import { dbConnection } from "../database/config";
import cors from "cors";
import authRoutes from "../routes/auth";
import ordersRoutes from "../routes/orders";
import librosRoutes from "../routes/products";

export class Server {
  app: Express;
  port: string | number | undefined;
  authPath: string;
  ordersPath: string;
  librosPath: string;

  constructor() {
    this.app = express();
    this.port = process.env.PORT;
    this.authPath = "/auth";
    this.ordersPath = "/orders";
    this.librosPath = "/libros";
    this.conectarDB();
    this.middlewares();
    this.routes();
  }
  async conectarDB(): Promise<void> {
    await dbConnection();
  }
  middlewares(): void {
    this.app.use(express.json());
    this.app.use(cors());
  }
  routes(): void {
    this.app.use(this.authPath, authRoutes);
    this.app.use(this.ordersPath, ordersRoutes);
    this.app.use(this.librosPath, librosRoutes);
  }
  listen(): void {
    this.app.listen(this.port, () => {
      console.log(`Corriendo en puerto ${this.port}`);
    });
  }
}
