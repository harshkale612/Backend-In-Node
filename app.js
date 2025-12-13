const express = require("express");
const app = express();

app.use( (req, res, next) => {
  console.log("First dummy middleware", req.url, req.method);
  next();
});
app.use( (req, res, next) => {
  console.log("Second dummy middleware", req.url, req.method);
  
  
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
