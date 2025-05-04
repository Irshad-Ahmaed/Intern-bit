const fs = require('fs');
const path = require('path');

function getTimeStamp() {
    return new Date().toISOString();
}

function formatError(message, err) {
    return `[${getTimeStamp()}] ERROR: ${message}\nStack: ${err.stack || 'N/A'}\n\n`;
}

module.exports = {
    error: (message, err) => {
        const log = formatError(message, err);
        fs.appendFileSync(path.join(__dirname, '../logs/error.log'), log);
        console.error(log);
    }
};