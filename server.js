const express = require('express');
const path = require('path');

const app = express();
const PORT = 8081;

app.use(express.static(path.join(__dirname, 'dist')));

app.get('*', (req, res) => {
	res.sendFile(path.join(__dirname, 'dist', 'index.html'));
});

app.listen(PORT, () => {
	console.log(`Server is running on http://localhost:${PORT}`);
});

// TODO: integration in Next
