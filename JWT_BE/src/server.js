import express from "express";

import configViewEngine from "./configs/viewEngine";

import initWebRoutes from "./routes/web";

require("dotenv").config();

const app = express();

// config viewEngine
configViewEngine(app);

initWebRoutes(app);

const PORT = process.env.PORT || 8080;

app.listen(PORT, () => {
  console.log(" >>>>>>>>> JWT running succesfully on the port " + PORT);
});
