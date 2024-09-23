const connectToMongo = require("./db");
const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv")
const path = require("path");

connectToMongo();

if (process.env.NODE_ENV.trim() == 'dev') {
  dotenv.config({ path: path.join(__dirname, '.env.dev') });
} else if (process.env.NODE_ENV.trim() === 'stag') {
  dotenv.config({ path: path.join(__dirname, '.env.stag') });
} else if (process.env.NODE_ENV.trim() === 'prod') {
  dotenv.config({ path: path.join(__dirname, '.env.prod') });
}

console.log(process.env.NODE_ENV.trim() === "dev", process.env.NODE_ENV, 'kkk');

const app = express();
const port = process.env.PORT || 8085
app.use(cors());
app.use(express.json());

// route for serving saved images in Node Server
app.use("/uploads", express.static(path.join(__dirname, "uploads")));

// Available Routes
app.use("/api/auth", require("./routes/auth"));
app.use("/api/notes", require("./routes/notes"));

// route for uploading image
app.use("/api/upload", require("./routes/imageUpload"));

app.listen(port, () => {
  console.log(`iNotebook backend listening at http://localhost:${port}`);
});


