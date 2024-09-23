// This file is use to save the image uploads locally in Node server
// we can also use Azure blob services / or AWS S3 bucket, or also can store in Mongodb as a binary data, but mainly
// we prefer s3 bucket
// we can also handle multiple file upload using upload.array method instead of upload.single

const express = require("express");
const router = express.Router();
const multer = require("multer");
const path = require("path");
const fs = require("fs");

// this is directory we are creating in our server
const uploadDir = "./uploads";

if (!fs.existsSync(uploadDir)) {
  fs.mkdirSync(uploadDir);
}

// Set up multer for file uploads
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "./backend/uploads/"); // Uploads will be stored in the './backend/uploads/' directory
  },
  filename: (req, file, cb) => {
    const ext = path.extname(file.originalname);
    cb(null, Date.now() + ext); // Use a unique filename
  },
});

const upload = multer({ storage });

// Handle image upload
router.post("/newUpload", upload.single("image"), (req, res) => {
  if (!req.file) {
    return res.status(400).send("No file uploaded.");
  }

  const imageUrl = `${req.protocol}://${req.get("host")}/uploads/${req.file.filename
    }`;
  res.json({ imageUrl });
});

module.exports = router;
