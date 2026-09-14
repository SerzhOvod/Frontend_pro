import { useEffect, useState } from 'react';

import {
  Box,
  Container,
  Typography,
  TextField,
  Grid,
  Card,
  CardContent,
  CircularProgress,
  Alert,
  Pagination,
  Stack,
  Chip,
  InputAdornment,
  Paper,
  Divider,
} from '@mui/material';

import SearchIcon from '@mui/icons-material/Search';
import PersonIcon from '@mui/icons-material/Person';

const API_URL = 'https://swapi.dev/api/people/';

const technologies = [
  'React',
  'JavaScript',
  'Material UI',
  'REST API',
  'Fetch API',
  'SWAPI',
  'Responsive Design',
  'Vite',
];

export default function Swapi() {
  const [people, setPeople] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const [search, setSearch] = useState('');
  const [page, setPage] = useState(1);

  const [totalPages, setTotalPages] = useState(1);

  useEffect(() => {
    fetchPeople();
  }, [page, search]);

  const fetchPeople = async () => {
    try {
      setLoading(true);
      setError(null);

      const params = new URLSearchParams();

      params.append('page', page);

      if (search.trim()) {
        params.append('search', search.trim());
      }

      const response = await fetch(`${API_URL}?${params.toString()}`);

      if (!response.ok) {
        throw new Error('Не вдалося завантажити дані SWAPI');
      }

      const data = await response.json();

      setPeople(data.results);

      setTotalPages(Math.ceil(data.count / 10));
    } catch (error) {
      setError(error.message);
      setPeople([]);
    } finally {
      setLoading(false);
    }
  };

  const handleSearchChange = event => {
    setSearch(event.target.value);
    setPage(1);
  };

  const handlePageChange = (event, value) => {
    setPage(value);

    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <Box sx={{ py: 8 }}>
      <Container maxWidth="lg">
        {/* =========================
            HEADER
        ========================= */}

        <Typography
          variant="h2"
          sx={{
            mb: 1,
            fontWeight: 800,
          }}
        >
          SWAPI
        </Typography>

        <Typography
          color="text.secondary"
          sx={{
            mb: 5,
            fontSize: '1.1rem',
            lineHeight: 1.7,
          }}
        >
          Веб-застосунок для отримання та відображення інформації про персонажів
          всесвіту Star Wars за допомогою відкритого REST API.
        </Typography>

        {/* =========================
            SCREENSHOT
        ========================= */}

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
            src="/swapi.png"
            alt="SWAPI — виконане завдання"
            sx={{
              display: 'block',
              width: '100%',
              height: 'auto',
              borderRadius: 1,
            }}
          />
        </Paper>

        {/* =========================
            TECHNOLOGIES
        ========================= */}

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
