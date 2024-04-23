const express = require('express');
const app = express();
const PORT = process.env.PORT || 5000;

// Mock data
const data = [
  { id: 1, name: 'blah 1' },
  { id: 2, name: 'blah 2' },
  { id: 3, name: 'blah 3' },
];

// CORS middleware
app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
  next();
});

// API endpoint to fetch data
app.get('/api/data', (req, res) => {
  res.json(data);
});

// Start server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});