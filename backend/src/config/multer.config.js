import express from "express";
import multer from "multer";
import path from "path"; // File path handle karne ke liye
import fs from "fs"; // Folder check/create karne ke liye

const uploadFolder = "upload";
if (!fs.existsSync(uploadFolder)) {
  fs.mkdirSync(uploadFolder);
}

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, uploadFolder);
  },
  filename: (req, file, cb) => {
    const uniqueSuffix = Date.now() + "-" + Math.round(Math.random() * 1e9);
    cb(
      null,
      file.fieldname + "-" + uniqueSuffix + path.extname(file.originalname)
    );
    // ✅ Unique naam generate kar raha hai
  },
});
const fileFilter = (req, file, cb) => {
  const allowedTypes = /jpeg|jpg|png/;
  const extName = allowedTypes.test(
    path.extname(file.originalname).toLowerCase()
  );
  const mimeType = allowedTypes.test(file.mimetype);

  if (extName && mimeType) {
    cb(null, true); // ✅ File allow ho gayi
  } else {
    cb(new Error("Only images (jpeg, jpg, png) are allowed!"), false); // ❌ Invalid file
  }
};

const upload = multer({
  storage: storage,
  limits: { fileSize: 3 * 1024 * 1024 }, // ✅ Max 3MB
  fileFilter: fileFilter,
});
export default upload.single("image");
