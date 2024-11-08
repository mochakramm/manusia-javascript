const fs = require('fs');
const path = require('path');

// Sesuaikan path untuk data.json agar berada di folder database
const filePath = path.join(__dirname, 'data.json');

let manusiaList = [];
if (fs.existsSync(filePath)) {
    const data = fs.readFileSync(filePath, 'utf-8');
    manusiaList = JSON.parse(data);
}



module.exports = { manusiaList };
