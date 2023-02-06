import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import dotenv from "dotenv";

dotenv.config();

// Routers
import userRouter from "./routers/user.js";

const server = express();
const port = 5000;

// middlewares
server.use(bodyParser.json());
server.use(cors({ origin: "*" }));

server.use("/api", userRouter);

server.listen(port, () => console.log(`Server is listening on port: ${port}`));
