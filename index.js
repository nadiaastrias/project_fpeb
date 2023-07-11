import express from "express";
import cors from "cors";
import DosenRoute from "./routes/DosenRoute.js"

const app = express();
app.use(cors());
app.use(express.json());
app.use(DosenRoute);

app.listen(5000, ()=> console.log('Server up and running...'));