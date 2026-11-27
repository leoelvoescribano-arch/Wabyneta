const express = require('express');
const { exec } = require('child_process');

const app = express();
let contador = 0;

app.use(express.static('public'));

app.get('/api/contador', (req, res) => res.json({ valor: contador }));

app.post('/api/contador/incrementar', (req, res) => {
    contador++;
    res.json({ valor: contador });
});

app.post('/api/contador/reiniciar', (req, res) => {
    contador = 0;
    res.json({ valor: contador });
});

app.listen(3000, () => {
    console.log('Contador en http://localhost:3000');
    const abrir = process.platform === 'win32' ? 'start' : process.platform === 'darwin' ? 'open' : 'xdg-open';
    exec(`${abrir} http://localhost:3000`);
});
