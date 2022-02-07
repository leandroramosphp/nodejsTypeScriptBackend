const express = require('express');

const app =  express();

app.listen(3000,() => console.log('servidor rodadndo porta :3000'));


app.get('/', (req,res) => res.send('Servidor rodadndo, tudo ok'));

app.get('/atendimentos', (req, res) => res.send('Você está na rota de atendimentos'));