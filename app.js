const express = require('express');
const app = express();

// Set EJS as the view engine and specify the views directory
app.set('view engine', 'ejs');
app.set('views', './views');

// Serve static files from the 'public' directory
app.use(express.static('public'));

// Import routes from the './routes' directory
const indexRoutes = require('./routes');
app.use('/', indexRoutes);

// Set up server to listen on a port (default: 3000)
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
