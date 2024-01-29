import express, { Express } from "express";
import cors from "cors";
import "dotenv/config";

import { router as postsRouter } from "./routes/posts";
import { router as usersRouter } from "./routes/users";

const app: Express = express();
const port = process.env.PORT || 3000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors({ credentials: false }));



const API_PREFIX = "/api";
app.use(`${API_PREFIX}/posts`, postsRouter);
app.use(`${API_PREFIX}/users`, usersRouter);

app.listen(port, () =>
    console.log(`🚀 Server listening at http://localhost:${port}`)
);
