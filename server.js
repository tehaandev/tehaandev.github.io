#!/usr/bin/env node
import path from "path";
import express from "express";
import { dirname } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(process.env.PUBLIC_URL));

const app = express();
const root = path.join(__dirname, "build/");
app.use(express.static(root));
app.use((req, res, next) => {
  if (
    req.method === "GET" &&
    req.accepts("html") &&
    !req.is("json") &&
    !req.path.includes(".")
  ) {
    res.sendFile("index.html", { root });
  } else next();
});

const PORT = process.env.EXPRESS_PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
