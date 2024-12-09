const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors());
app.use(express.json());

// Sample data - In a real app, this would come from a database
const books = [
  {
    id: 1,
    title: 'Database Management Systems',
    stream: 'cs',
    semester: 'sem5',
    subject: 'database',
    condition: 'good',
    price: 450,
  },
  // Add more sample books as needed
];

// GET endpoint to fetch books with filters
app.get('/api/books', (req, res) => {
  const { streams, semesters, subjects, conditions } = req.query;

  let filteredBooks = [...books];

  if (streams) {
    const streamArray = streams.split(',');
    filteredBooks = filteredBooks.filter(book => streamArray.includes(book.stream));
  }

  if (semesters) {
    const semesterArray = semesters.split(',');
    filteredBooks = filteredBooks.filter(book => semesterArray.includes(book.semester));
  }

  if (subjects) {
    const subjectArray = subjects.split(',');
    filteredBooks = filteredBooks.filter(book => subjectArray.includes(book.subject));
  }

  if (conditions) {
    const conditionArray = conditions.split(',');
    filteredBooks = filteredBooks.filter(book => conditionArray.includes(book.condition));
  }

  res.json(filteredBooks);
});

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});