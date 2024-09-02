import express from 'express';
import { router } from './routes/todos';

const app = express();
const PORT = 3000;

// middleware para permitir o processamento de JSON
app.use(express.json());

// usando as rotas de todos
app.use('/api', router);

// iniciando o servidor
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});