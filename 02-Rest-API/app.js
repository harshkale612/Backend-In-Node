const express = require("express");
const app = express();

app.use(express.json());

let books = [
  { id: 1, title: "Book 1" },
  { id: 2, title: "Book 2" },
  { id: 3, title: "Book 3" },
];

app.get("/", (req, res) => {
  res.json({
    message: "Welcome to our bookstore api",
  });
});

app.get("/get", (req, res) => {
  res.json(books);
});

app.get("/get/:id", (req, res) => {
  const book = books.find((book) => book.id === parseInt(req.params.id));
  if (book) {
    res.json(book);
  } else {
    res.status(404).json({ message: "somthing went wrong" });
  }
});

app.post("/add", (req, res) => {
  const newBook = {
    id: books.length + 1,
    title: `Book ${books.length + 1}`,
  };
  books.push(newBook);
  res.status(200).json({ data: newBook, message: "Book added succesfully" });
});

app.put("/update/:id", (req, res) => {
  const id = parseInt(req.params.id);

  if (isNaN(id)) {
    return res.status(400).json({ message: "Invalid book id" });
  }

  const findCurrentBook = books.find((book) => book.id === id);

  if (!findCurrentBook) {
    return res.status(404).json({ message: "Book not found" });
  }

  if (req.body && req.body.title) {
    findCurrentBook.title = req.body.title;
  }

  res.status(200).json({
    message: `Book with id ${id} updated successfully`,
    data: findCurrentBook,
  });
});

app.delete("/books/:id", (req, res) => {
  const id = parseInt(req.params.id);

  if (isNaN(id)) {
    return res.status(400).json({ message: "Invalid book id" });
  }

  const bookIndex = books.findIndex((book) => book.id === id);

  if (bookIndex === -1) {
    return res.status(404).json({ message: "Book not found" });
  }

  const deletedBook = books.splice(bookIndex, 1);

  res.status(200).json({
    message: `Book with id ${id} deleted successfully`,
    data: deletedBook[0],
  });
});

const port = 3000;
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
