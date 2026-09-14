import {
  Box,
  Container,
  Typography,
  Button,
  Stack,
  Grid,
  Card,
  CardContent,
  Chip,
  Divider,
} from '@mui/material';

import CodeIcon from '@mui/icons-material/Code';
import PaletteIcon from '@mui/icons-material/Palette';
import WebIcon from '@mui/icons-material/Web';
import GitHubIcon from '@mui/icons-material/GitHub';
import EmailIcon from '@mui/icons-material/Email';
import DownloadIcon from '@mui/icons-material/Download';

const skills = [
  'HTML5',
  'CSS3',
  'JavaScript',
  'React',
  'Redux',
  'Redux Saga',
  'TypeScript',
  'MUI',
  'Git',
  'GitHub',
  'Responsive Design',
  'UI/UX',
];

const services = [
  {
    icon: <CodeIcon fontSize="large" />,
    title: 'Front-end Development',
    description:
      'Створення сучасних, швидких та адаптивних веб-додатків на React.',
  },
  {
    icon: <PaletteIcon fontSize="large" />,
    title: 'UI/UX Design',
    description:
      'Проєктування зручних інтерфейсів та сучасних користувацьких сценаріїв.',
  },
  {
    icon: <WebIcon fontSize="large" />,
    title: 'Responsive Web',
    description:
      'Адаптивна верстка, яка коректно працює на desktop, tablet та mobile.',
  },
];

export default function Home() {
  return (
    <Box>
      {/* Hero */}
      <Box
        sx={{
          py: {
            xs: 8,
            md: 14,
          },
        }}
      >
        <Container maxWidth="lg">
          <Grid container spacing={6} sx={{ alignItems: 'center' }}>
            <Grid size={{ xs: 12, md: 8 }}>
              <Typography color="primary" fontWeight={600} sx={{ mb: 2 }}>
                HELLO, I'M
              </Typography>

              <Typography
                variant="h1"
                sx={{
                  fontSize: {
                    xs: '3rem',
                    md: '5rem',
                  },
                  lineHeight: 1.05,
                  mb: 3,
                }}
              >
                Сергій
                <br />
                Оводенко
              </Typography>

              <Typography
                variant="h4"
                color="text.secondary"
                sx={{
                  mb: 3,
                  fontSize: {
                    xs: '1.4rem',
                    md: '2rem',
                  },
                }}
              >
                Front-end Developer
              </Typography>

              <Typography
                variant="body1"
                color="text.secondary"
                sx={{
                  maxWidth: 650,
                  fontSize: '1.1rem',
                  lineHeight: 1.8,
                  mb: 4,
                }}
              >
                Створюю сучасні веб-інтерфейси, використовуючи React,
                JavaScript, TypeScript та сучасні UI-бібліотеки. Поєдную
                front-end розробку з досвідом у UI/UX дизайні.
              </Typography>

              <Stack
                direction={{
                  xs: 'column',
                  sm: 'row',
                }}
                spacing={2}
              >
                <Button
                  component="a"
                  href="mailto:sergey.ovodenko@gmail.com"
                  startIcon={<EmailIcon />}
                  size="large"
                >
                  Зв'язатися
                </Button>

                <Button
                  component="a"
                  href="https://github.com/SerzhOvod/"
                  target="_blank"
                  rel="noopener noreferrer"
                  variant="outlined"
                  startIcon={<GitHubIcon />}
                  size="large"
                >
                  GitHub
                </Button>

                <Button
                  component="a"
                  href="/Serhii_Ovodenko_CV.pdf"
                  download="Serhii_Ovodenko_CV.pdf"
                  variant="outlined"
                  startIcon={<DownloadIcon />}
                  size="large"
                >
                  CV
                </Button>
              </Stack>
            </Grid>

            <Grid
              size={{ xs: 12, md: 4 }}
              sx={{
                display: {
                  xs: 'none',
                  md: 'block',
                },
              }}
            >
              <Box
                sx={{
                  width: 280,
                  height: 280,
                  margin: '0 auto',
                  borderRadius: '50%',
                  border: '1px solid',
                  borderColor: 'primary.main',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  boxShadow: '0 0 80px rgba(144, 202, 249, 0.15)',
                }}
              >
                <CodeIcon
                  sx={{
                    fontSize: 100,
                    color: 'primary.main',
                  }}
                />
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* About */}
      <Box sx={{ py: 8 }}>
        <Container maxWidth="lg">
          <Typography variant="h2" sx={{ mb: 2 }}>
            Про мене
          </Typography>

          <Divider sx={{ mb: 5 }} />

          <Typography
            color="text.secondary"
            sx={{
              maxWidth: 850,
              fontSize: '1.1rem',
              lineHeight: 1.8,
            }}
          >
            Я Front-end Developer, який спеціалізується на створенні сучасних
            SPA-додатків. Маю досвід роботи з HTML, CSS та JavaScript, а також
            розвиваю навички роботи з React, Redux, TypeScript та сучасними
            інструментами front-end розробки.
          </Typography>
        </Container>
      </Box>

      {/* Services */}
      <Box sx={{ py: 8 }}>
        <Container maxWidth="lg">
          <Typography variant="h2" sx={{ mb: 5 }}>
            Що я роблю
          </Typography>

          <Grid container spacing={3}>
            {services.map(service => (
              <Grid key={service.title} size={{ xs: 12, md: 4 }}>
                <Card
                  sx={{
                    height: '100%',
                    transition: '0.3s',
                    '&:hover': {
                      transform: 'translateY(-6px)',
                      borderColor: 'primary.main',
                    },
                  }}
                >
                  <CardContent sx={{ p: 4 }}>
                    <Box
                      sx={{
                        color: 'primary.main',
                        mb: 3,
                      }}
                    >
                      {service.icon}
                    </Box>

                    <Typography variant="h5" fontWeight={700} gutterBottom>
                      {service.title}
                    </Typography>

                    <Typography color="text.secondary">
                      {service.description}
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      {/* Skills */}
      <Box sx={{ py: 8 }}>
        <Container maxWidth="lg">
          <Typography variant="h2" sx={{ mb: 5 }}>
            Skills
          </Typography>

          <Stack
            direction="row"
            spacing={1}
            useFlexGap
            sx={{ flexWrap: 'wrap' }}
          >
            {skills.map(skill => (
              <Chip
                key={skill}
                label={skill}
                variant="outlined"
                sx={{
                  fontSize: '0.95rem',
                  py: 2.2,
                }}
              />
            ))}
          </Stack>
        </Container>
      </Box>

      {/* CTA */}
      <Box sx={{ py: 10 }}>
        <Container maxWidth="md">
          <Card>
            <CardContent
              sx={{
                p: {
                  xs: 4,
                  md: 7,
                },
                textAlign: 'center',
              }}
            >
              <Typography variant="h3" gutterBottom>
                Let's work together
              </Typography>

              <Typography color="text.secondary" sx={{ mb: 4 }}>
                Відкритий до нових проєктів, співпраці та професійного розвитку.
              </Typography>

              <Button
                size="large"
                startIcon={<EmailIcon />}
                component="a"
                href="mailto:sergey.ovodenko@gmail.com"
              >
                Написати мені
              </Button>
            </CardContent>
          </Card>
        </Container>
      </Box>
    </Box>
  );
}
