// Create web server
// Create a new web server using the express.js framework.
const express = require('express');
const app = express();

// Define a port to listen on
const port = 3000;

// Listen on the port
app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});