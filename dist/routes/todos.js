"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.router = void 0;
const express_1 = require("express");
exports.router = (0, express_1.Router)();
// armazena as tarefas em um array (simulação de um banco de dados)
let todos = [
    { id: 1, title: 'Learn TypeScript', completed: false },
    { id: 2, title: 'Build an API with Express', completed: false },
];
// rota para obter todas as tarefas
exports.router.get('/todos', (req, res) => {
    res.json(todos);
});
// rota para criar uma nova tarefa
exports.router.post('/todos', (req, res) => {
    const newTodo = {
        id: todos.length + 1,
        title: req.body.title,
        completed: false,
    };
    todos.push(newTodo);
    res.status(201).json(newTodo);
});
// rota para atualizar uma tarefa existente
exports.router.put('/todos/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const todoIndex = todos.findIndex(todo => todo.id === id);
    if (todoIndex !== -1) {
        todos[todoIndex] = Object.assign(Object.assign({}, todos[todoIndex]), req.body);
        res.json(todos[todoIndex]);
    }
    else {
        res.status(404).json({ message: 'Todo not found' });
    }
});
// rota para excluir uma tarefa
exports.router.delete('/todos/:id', (req, res) => {
    const id = parseInt(req.params.id);
    todos = todos.filter(todo => todo.id !== id);
    res.status(204).end();
});
