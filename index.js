const express = require("express");
const fs = require("fs");

const app = express();

app.use(express.json());

// FIlE Creation

app.post("/file/create", (req, res) => {
  const { name, content } = req.body;

  fs.appendFile(name, content, (err) => {
    if (err) {
      res.send({ message: "Error" });
    } else {
      res.send({ message: "File Created" });
    }
  });
});

app.put("/file/update", (req, res) => {
  const { name, content } = req.body;
  fs.writeFile(name, content, (err) => {
    if (err) {
      res.send({ message: "Error" });
    } else {
      res.send({ message: "File Updated" });
    }
  });
});

app.delete("/file/delete", (req, res) => {
  const { name } = req.body;
  fs.unlink(name, (err) => {
    if (err) {
      res.send({ message: "Error" });
    } else {
      res.send({ message: "File Deleted" });
    }
  });
});

// CAlculator

app.post("/cal/sum", (req, res) => {
  const { numbers } = req.body;
  const sum = numbers.reduce((acc, curr) => acc + curr, 0);
  res.send({ sum });
});

app.post("/cal/sub", (req, res) => {
  const { numbers } = req.body;
  const sub = numbers.reduce((acc, curr) => acc - curr, 0);
  res.send({ sub });
});

app.post("/cal/mul", (req, res) => {
  const { numbers } = req.body;
  const mul = numbers.reduce((acc, curr) => acc * curr, 1);
  res.send({ mul });
});

app.post("/cal/div", (req, res) => {
  const { numbers } = req.body;
  if (numbers === 0) {
    res.send({ message: "Error" });
  } else {
    const divi = numbers.reduce((acc, curr) => acc / curr, 1);
    res.send({ divi });
  }
});

app.get("/", (req, res) => {
  res.send({ messaage: "Started" });
});

app.listen(8090, () => {
  console.log("Server is running on port 8090");
});
