const express = require('express');
const cors = require('cors');

const app = express();
const PORT = 5240;

// Enable CORS for frontend
app.use(cors({
  origin: 'http://localhost:3000',
  methods: ['GET'],
  credentials: true
}));

// Weather data
const weatherData = {
  bulgaria: {
    location: 'София, България',
    temperature: '22°C',
    description: 'Слънчево',
    windSpeed: '15 km/h',
    humidity: '45%',
    forecast: [
      { time: '12:00', temp: '23°' },
      { time: '15:00', temp: '25°' },
      { time: '18:00', temp: '21°' },
      { time: '21:00', temp: '18°' }
    ]
  },
  uk: {
    location: 'Лондон, Великобритания',
    temperature: '18°C',
    description: 'Облачно',
    windSpeed: '20 km/h',
    humidity: '65%',
    forecast: [
      { time: '12:00', temp: '19°' },
      { time: '15:00', temp: '20°' },
      { time: '18:00', temp: '17°' },
      { time: '21:00', temp: '15°' }
    ]
  }
};

// Routes
app.get('/weather/:country', (req, res) => {
  const country = req.params.country.toLowerCase();
  const data = weatherData[country];
  
  if (!data) {
    return res.status(404).json({ error: 'Country not found' });
  }
  
  res.json(data);
});

// Start server
app.listen(PORT, () => {
  console.log(`🌤️  Weather API running on http://localhost:${PORT}`);
  console.log('Available endpoints:');
  console.log('  GET /weather/bulgaria');
  console.log('  GET /weather/uk');
});
