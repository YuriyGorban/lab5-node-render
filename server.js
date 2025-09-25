const express = require('express');
const fs = require('fs');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000; 
const ENV_TEST_VAR = process.env.ENV_TEST_VAR || 'ЗНАЧЕННЯ НЕ ВСТАНОВЛЕНО (Локальний або початковий стан)';

app.get('/', (req, res) => {
    const indexPath = path.join(__dirname, 'index.html');
    let htmlContent = fs.readFileSync(indexPath, 'utf8');
    htmlContent = htmlContent.replace('##ENV_VARIABLE_PLACEHOLDER##', ENV_TEST_VAR);
    res.send(htmlContent);
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
    console.log(`Checking ENV_TEST_VAR: ${ENV_TEST_VAR}`);
});
