const express = require('express');
const path = require('path');
const app = express();

app.use(express.static(path.join(__dirname, '..')));

// API endpoint for chatbot (simulated response)
app.get('/api/chat', (req, res) => {
    res.json({ reply: 'This is a simulated chatbot response.' });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
