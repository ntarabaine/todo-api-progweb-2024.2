import { Router } from 'express';
import { Todo } from '../models/todo';

export const router = Router();
// armazena as tarefas em um array (simulação de um banco de dados)

let todos: Todo[] = [
  { id: 1, title: 'Learn TypeScript', completed: false },
  { id: 2, title: 'Build an API with Express', completed:false },
];

// rota para obter todas as tarefas
router.get('/todos', (req, res) => {
  res.json(todos);
});

// rota para criar uma nova tarefa
router.post('/todos', (req, res) => {
  const newTodo: Todo = {
    id: todos.length + 1,
    title: req.body.title,
    completed: false,
  };
  todos.push(newTodo);
  res.status(201).json(newTodo);
});

// rota para atualizar uma tarefa existente
router.put('/todos/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const todoIndex = todos.findIndex(todo => todo.id === id);
  if (todoIndex !== -1) {
    todos[todoIndex] = { ...todos[todoIndex], ...req.body };
    res.json(todos[todoIndex]);
  } else {
    res.status(404).json({ message: 'Todo not found'});
  }
});

// rota para excluir uma tarefa
router.delete('/todos/:id', (req, res) => {
  const id = parseInt(req.params.id);
  todos = todos.filter(todo => todo.id !== id);
  res.status(204).end();
});

