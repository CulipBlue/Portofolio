const express = require("express");
const path = require("path");

const app = express();
const port = process.env.PORT || 3000;
const publicDirectory = path.join(__dirname, "public");

app.disable("x-powered-by");

app.get("/health", (_request, response) => {
  response.status(200).json({ status: "ok" });
});

app.get("/resume.pdf", (_request, response) => {
  response.download(path.join(__dirname, "assets", "Resume-Ridho-Hafiz.pdf"), "Ridho-Hafiz-Resume.pdf");
});

app.use(express.static(publicDirectory, {
  extensions: ["html"],
  // Revalidate static assets on every visit so a new deploy cannot use stale CSS.
  maxAge: 0,
}));

app.listen(port, "0.0.0.0", () => {
  console.log(`Portfolio running on port ${port}`);
});
