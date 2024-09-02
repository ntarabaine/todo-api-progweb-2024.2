"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mini_express_1 = require("./lib/mini-express");
const app = new mini_express_1.MiniExpress();
// M1: registra o método e a URL da requisição.
app.use((req, res, next) => {
    console.log(`Request: ${req.method} ${req.url}`);
    if (next)
        next(); // passa o controle para o próximo middleware.
});
// M2: verifica a autenticação (simulação)
app.use((req, res, next) => {
    const authenticated = true; // simula uma verificação de autenticação.
    if (authenticated) {
        if (next)
            next(); // se autenticado, passa para o próximo middleware.
    }
    else {
        res.statusCode = 401;
        res.end('Not authenticated'); // encerra a resposta se não autenticado.
    }
});
// M3: manipula a rota raiz "/"
app.use((req, res, next) => {
    if (req.url === '/') {
        res.write('Welcome to the Home Page!');
        res.end(); // encerra a resposta para a rota raiz.
    }
    else {
        if (next)
            next(); // passa o controle para o próximo middleware se a rota não for "/".
    }
});
// M4: manipula a rota "/about"
app.use((req, res, next) => {
    if (req.url === '/about') {
        res.write('This is the About Page.');
        res.end(); // encerra a resposta para a rota "/about".
    }
    else {
        if (next)
            next(); // passa o controle para o próximo middleware se a rota não for "about".
    }
});
// M5: manipula todas as outras rotas
app.use((req, res) => {
    res.statusCode = 404;
    res.end('404 Not Found'); // encerra a resposta com uma mensagem de "404 Not Found".
});
// Inicia o servidor na porta 3000.
app.listen(3000, () => {
    console.log('Server running on http://localhost:3000');
});
