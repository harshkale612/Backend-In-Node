const express = require("express");
const app = express();

app.use((req, res, next) => {
  console.log("First dummy middleware", req.url, req.method);
  next();
});
app.use((req, res, next) => {
  console.log("Second dummy middleware", req.url, req.method);
  next();
});
// app.use((req,res,next)=>{
//   console.log("Third dummy miidlewre",req.url,req.method);
//   res.send("<h1>Hello World</h1>")

// })

app.get("/", (req, res, next) => {
  console.log("Third dummy miidlewre", req.url, req.method);
  res.send("<h1>Welcome to positive sum games academy</h1>");
});
app.get("/contact-us", (req, res, next) => {
  console.log("Handling contact-us page using GET method");
  res.send("Add your details below");
  next();
});
app.post("/contact-us", (req, res) => {
  console.log("Handling contact-us page using POST method");
  res.send("contact us details ");
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
