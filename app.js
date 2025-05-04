const express = require('express');
const app = express();
const postRoutes = require('./routes/posts');
const logger = require('./utils/logger');

app.use(express.json());
app.use('/api/v1/posts', postRoutes);

// Global error handler
app.use((err, req, res, next) => {
    logger.error(err.message, err);
    res.status(err.status || 500).json({ error: err.message || 'Internal Server Error' });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});