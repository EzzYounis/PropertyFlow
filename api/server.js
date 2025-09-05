const express = require('express');
const cors = require('cors');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 3001;

// Middleware
app.use(cors());
app.use(express.json());

// Basic route
app.get('/', (req, res) => {
  res.json({ 
    message: 'PropertyFlow API Server is running!',
    timestamp: new Date().toISOString()
  });
});

// API routes
app.get('/api/properties', (req, res) => {
  res.json({ 
    message: 'Properties endpoint',
    data: []
  });
});

app.get('/api/clients', (req, res) => {
  res.json({ 
    message: 'Clients endpoint',
    data: []
  });
});

app.listen(PORT, () => {
  console.log(`API Server running on http://localhost:${PORT}`);
});