import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import {
  Box,
  Container,
  Typography,
  TextField,
  Button,
  Paper,
  Stack,
  Checkbox,
  IconButton,
  CircularProgress,
  Alert,
  Divider,
  Chip,
} from '@mui/material';

import AddIcon from '@mui/icons-material/Add';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import SaveIcon from '@mui/icons-material/Save';
import ClearAllIcon from '@mui/icons-material/ClearAll';

import {
  fetchTodosRequest,
  addTodoRequest,
  deleteTodoRequest,
  toggleTodoRequest,
  editTodoRequest,
  clearTodosRequest,
} from '../../redux/todoSlice';

const technologies = [
  'React',
  'JavaScript',
  'Redux Toolkit',
  'Redux Saga',
  'Material UI',
  'LocalStorage',
  'Vite',
];

export default function Todo() {
  const dispatch = useDispatch();

  const { items, loading, error } = useSelector(state => state.todos);

  const [text, setText] = useState('');
  const [editingId, setEditingId] = useState(null);
  const [editingText, setEditingText] = useState('');

  useEffect(() => {
    dispatch(fetchTodosRequest());
  }, [dispatch]);

  const handleSubmit = event => {
    event.preventDefault();

    if (!text.trim()) {
      return;
    }

    dispatch(addTodoRequest(text.trim()));

    setText('');
  };

  const handleEdit = (id, currentText) => {
    setEditingId(id);
    setEditingText(currentText);
  };

  const handleSaveEdit = id => {
    if (!editingText.trim()) {
      return;
    }

    dispatch(
      editTodoRequest({
        id,
        text: editingText.trim(),
      }),
    );

    setEditingId(null);
    setEditingText('');
  };

  return (
    <Box sx={{ py: 8 }}>
      <Container maxWidth="md">
        {/* PAGE HEADER */}

        <Typography
          variant="h2"
          sx={{
            mb: 1,
            fontWeight: 800,
          }}
        >
          TODO List
        </Typography>

        <Typography
          color="text.secondary"
          sx={{
            mb: 5,
            fontSize: '1.1rem',
            lineHeight: 1.7,
          }}
        >
          Застосунок для створення та керування списком завдань. Реалізовано
          додавання, редагування, видалення та позначення завдань як виконаних.
        </Typography>

        {/* ASSIGNMENT SCREENSHOT */}

        <Typography
          variant="h4"
          sx={{
            mb: 2,
            fontWeight: 700,
          }}
        >
          Скріншот виконаного завдання
        </Typography>

        <Paper
          sx={{
            p: {
              xs: 1,
              sm: 2,
            },
            mb: 6,
            overflow: 'hidden',
          }}
        >
          <Box
            component="img"
            src="/todo-list.png"
            alt="Todo List — виконане завдання"
            sx={{
              display: 'block',
              width: '100%',
              height: 'auto',
              borderRadius: 1,
            }}
          />
        </Paper>

        {/* TECHNOLOGIES */}

        <Typography
          variant="h4"
          sx={{
            mb: 2,
            fontWeight: 700,
          }}
        >
          Використані технології
        </Typography>

        <Paper
          sx={{
            p: 3,
            mb: 6,
          }}
        >
          <Stack direction="row" spacing={1} useFlexGap flexWrap="wrap">
            {technologies.map(technology => (
              <Chip
                key={technology}
                label={technology}
                color="primary"
                variant="outlined"
                sx={{
                  mb: 1,
                }}
              />
            ))}
          </Stack>
        </Paper>
      </Container>
    </Box>
  );
}
