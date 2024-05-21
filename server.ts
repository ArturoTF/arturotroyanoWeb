import express, { Request, Response, NextFunction } from "express";
import bodyParser from "body-parser";
import path from "path";

const app = express();
const port = process.env['PORT'] || 3000;

const allowCors = (req: Request, res: Response, next: NextFunction) => {
  res.header("Access-Control-Allow-Origin", "*"); // Añade los dominios permitidos
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept, Authorization, Access-Control-Allow-Credentials, X-Access-Token, X-Key"
  );
  res.header("Access-Control-Allow-Methods", "GET, PUT, POST, DELETE, OPTIONS, PATCH");
  res.header("Access-Control-Allow-Credentials", "true");

  next();
};

app.use(allowCors);
app.use(bodyParser.json({ limit: "10mb" }));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, "dist", "arturotroyanoWeb", "browser")));

// Servir el index.html de Angular
app.get("*", (req: Request, res: Response) => {
  const indexPath = path.join(__dirname, "dist", "arturotroyanoWeb", "browser", "index.html");
  console.log("Serving index.html from:", indexPath); // Mensaje de depuración
  res.sendFile(indexPath);
});

app.listen(port, () => {
  console.log(`API Gateway running on port ${port}!`);
});
