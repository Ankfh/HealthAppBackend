const multer = require("multer");

const storage = multer.diskStorage({
  destination: function (req, file, cb) {

    cb(null, "uploads/");
  },
  filename: function (req, file, cb) {
    const date = new Date();
    const timestamp = date.getTime();
    const uniqueFilename = `${timestamp}_${file.originalname}`;
    cb(null, uniqueFilename);
  },
});

const upload = (fieldName, maxCount) => {
  const uploadMiddleware = multer({
    storage: storage,
    limits: { fileSize: 10 * 1024 * 1024 },
  }).array(fieldName, maxCount);
  console.log(uploadMiddleware, "uploadMiddleware");
  return (req, res, next) => {
    uploadMiddleware(req, res, function (err) {
      if (err instanceof multer.MulterError) {
        console.error("Multer error:", err);
        return res.status(500).json({ message: "File upload error" });
      } else if (err) {
        console.error("Unknown error:", err);
        return res.status(500).json({ message: "Unknown error" });
      }
      next();
    });
  };
};

module.exports = upload;
