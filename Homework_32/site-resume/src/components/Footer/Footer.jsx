import {
  Box,
  Container,
  Typography,
  IconButton,
  Stack,
  Divider,
} from '@mui/material';

import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailIcon from '@mui/icons-material/Email';

export default function Footer() {
  return (
    <Box
      component="footer"
      sx={{
        mt: 'auto',
        pt: 5,
        pb: 3,
      }}
    >
      <Container maxWidth="lg">
        <Divider sx={{ mb: 4 }} />

        <Stack
          direction={{
            xs: 'column',
            sm: 'row',
          }}
          spacing={3}
          justifyContent="space-between"
          alignItems="center"
        >
          <Box>
            <Typography variant="h6" fontWeight={700} gutterBottom>
              S.O Studio
            </Typography>

            <Typography variant="body2" color="text.secondary">
              Front-end Developer & UI/UX Designer
            </Typography>
          </Box>

          <Stack direction="row" spacing={1}>
            <IconButton
              component="a"
              href="https://github.com/SerzhOvod/"
              target="_blank"
              rel="noopener noreferrer"
              color="inherit"
            >
              <GitHubIcon />
            </IconButton>

            <IconButton
              component="a"
              href="https://www.linkedin.com/in/%D1%81%D0%B5%D1%80%D0%B3%D0%B5%D0%B9-%D0%BE%D0%B2%D0%BE%D0%B4%D0%B5%D0%BD%D0%BA%D0%BE-25746a232/"
              target="_blank"
              rel="noopener noreferrer"
              color="inherit"
            >
              <LinkedInIcon />
            </IconButton>

            <IconButton
              component="a"
              href="mailto:sergey.ovodenko@gmail.com"
              color="inherit"
            >
              <EmailIcon />
            </IconButton>
          </Stack>
        </Stack>

        <Typography
          variant="body2"
          color="text.secondary"
          textAlign="center"
          sx={{ mt: 4 }}
        >
          © {new Date().getFullYear()} S.O Studio. All rights reserved.
        </Typography>
      </Container>
    </Box>
  );
}
