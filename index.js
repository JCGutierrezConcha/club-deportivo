import express from "express"
import path from "path"
import deportesRouter from "./routes/deportes.route.js"

const app = express();

const __dirname = import.meta.dirname;

app.use(express.static(path.join(__dirname, "/public")));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/", deportesRouter);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Servidor funcionando en el puerto : ${PORT}`);
})