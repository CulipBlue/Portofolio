const express = require('express');
const app = express();

// Serve static files from root (so index.html, images, scripts, style, assets, dll bisa diakses)
app.use(express.static(__dirname));

const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});