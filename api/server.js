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

// === DASHBOARD ROUTES ===
app.get('/api/dashboard/stats', (req, res) => {
  res.json({
    totalProperties: 0,
    activeListings: 0,
    soldThisMonth: 0,
    totalRevenue: 0
  });
});

// === PROPERTIES ROUTES ===
app.get('/api/properties', (req, res) => {
  res.json({ 
    message: 'All properties',
    data: []
  });
});

app.get('/api/properties/:id', (req, res) => {
  const { id } = req.params;
  res.json({
    message: `Property details for ID: ${id}`,
    property: null
  });
});

app.post('/api/properties', (req, res) => {
  res.json({
    message: 'Property created successfully',
    property: req.body
  });
});

// === MAP ROUTES ===
app.get('/api/properties/locations', (req, res) => {
  res.json({
    message: 'Property locations for map',
    locations: []
  });
});

// === AI CONTENT GENERATION ROUTES ===
app.post('/api/ai/generate-content/:propertyId', (req, res) => {
  const { propertyId } = req.params;
  res.json({
    message: 'AI content generated',
    propertyId,
    generatedContent: {
      description: 'AI-generated property description',
      socialPosts: {
        facebook: 'Facebook post content',
        instagram: 'Instagram post content', 
        twitter: 'Twitter post content'
      }
    }
  });
});

// === CLIENTS ROUTES ===
app.get('/api/clients', (req, res) => {
  res.json({ 
    message: 'All clients',
    data: []
  });
});

app.listen(PORT, () => {
  console.log(`🚀 API Server running on http://localhost:${PORT}`);
});