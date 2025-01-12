const express = require('express');
const app = express();
const PORT = 3000;

function renderHTML(name) {
  return `
    <!DOCTYPE html>
    <html lang="en">
    <body>
        <h1>Welcome, ${name}!</h1>
        <p>This HTML was rendered on the server.</p>
    </body>
    </html>
  `;
}

// Route to handle rendering
app.get('/', (req, res) => {
  const name = req.query.name || 'Guest'; // Get name from query parameters
  const html = renderHTML(name);         // Render the HTML dynamically
  res.send(html);                        // Send the rendered HTML to the browser
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});