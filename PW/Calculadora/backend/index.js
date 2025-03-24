// esse index.js serve o nosso backend da calculadora
//aqui tem os imports da aplicacao
            //o uso do POST envia a requisicao pro back
            //

// esse index.js serve o nosso backend da calculadora
//aqui tem os imports da aplicacao
            //o uso do POST envia a requisicao pro back
            //

import express from 'express';
import path from 'path'; 
import { fileURLToPath } from 'url';

const app = express();
const port = 3000;

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// ler arquivos estáticos da pasta 'public'
app.use(express.static(path.join(__dirname, '../public')));

//analisar requisições JSON
app.use(express.json());

// endpoint p/ fazer o cálculo
app.post('/calcular', (req, res) => {
    const { expressao } = req.body;

    console.log('Requisição recebida:', expressao); // console pra verificar se a requisição foi suave

    try {
        const resultado = new Function('return ' + expressao)();
        res.json({ resultado });
    } catch (error) {
        res.status(400).json({ erro: 'Erro ao calcular a expressão' });
    }
});

// servidor
app.listen(port, () => {
    console.log(`Servidor backend rodando na porta ${port}`);
});


// servidor
app.listen(port, () => {
    console.log(`Servidor backend rodando na porta ${port}`);
});
