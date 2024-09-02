"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const todos_1 = require("./routes/todos");
const app = (0, express_1.default)();
const PORT = 3000;
// middleware para permitir o processamento de JSON
app.use(express_1.default.json());
// usando as rotas de todos
app.use('/api', todos_1.router);
// iniciando o servidor
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
