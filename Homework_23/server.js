import express from 'express';
import cors from 'cors';

const app = express();
const port = 3000;

app.use(cors());
app.use(express.json());
app.use(express.static('public'));

let todos = [
  { id: 1, text: 'Learn Node.js', checked: false },
  { id: 2, text: 'Install Express и CORS', checked: false },
];

app.get('/todos', (req, res) => {
  res.json(todos);
});

app.post('/todos', (req, res) => {
  const newTodo = {
    id: Date.now(),
    ...req.body,
    checked: false,
  };
  todos.push(newTodo);
  res.status(201).json(newTodo);
});

app.put('/todos/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const { text, checked } = req.body;

  const todo = todos.find(t => t.id === id);
  if (!todo) {
    return res.status(404).json({ error: 'Task is not found' });
  }

  if (text !== undefined) todo.text = text;
  if (checked !== undefined) todo.checked = checked;

  res.json(todo);
});

app.delete('/todos/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const initialLength = todos.length;

  todos = todos.filter(t => t.id !== id);

  if (todos.length === initialLength) {
    return res.status(404).json({ error: 'Task is not found' });
  }

  res.json({ message: 'The task was deleted', id });
});

app.listen(port, () => {
  console.log(`Example app listening on http://localhost:${port}`);
});
