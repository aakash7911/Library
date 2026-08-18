const express = require('express');
const fs = require('fs');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.static(path.join(__dirname, 'public')));
app.use('/photos', express.static(path.join(__dirname, 'photos')));

app.get('/api/photos', (req, res) => {
    const photosDir = path.join(__dirname, 'photos');
    fs.readdir(photosDir, (err, files) => {
        if (err) {
            return res.status(500).json({ error: 'Failed to read photos directory' });
        }
        const images = files.filter(f => f.endsWith('.jpg') || f.endsWith('.jpeg') || f.endsWith('.png'));
        // Sort files alphabetically or numerically to ensure correct animation order
        images.sort((a, b) => a.localeCompare(b, undefined, {numeric: true}));
        res.json(images);
    });
});

app.listen(PORT, () => {
    console.log(`Server is running at http://localhost:${PORT}`);
});
