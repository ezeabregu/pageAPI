import express from "express";
import dotenv from "dotenv";
import { Server } from "./models/server";

//const express = require("express");
const app = express();

dotenv.config();
const server = new Server();
server.listen();

app.get("/", (req, res) => res.send("Express on Vercel"));

app.listen(3000, () => console.log("Server ready on port 3000."));

module.exports = app;

export default app;
