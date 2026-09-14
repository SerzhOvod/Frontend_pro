import { useState } from 'react';
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Box,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Container,
} from '@mui/material';

import MenuIcon from '@mui/icons-material/Menu';
import CodeIcon from '@mui/icons-material/Code';
import { NavLink } from 'react-router-dom';

const navigation = [
  {
    title: 'Головна',
    path: '/',
  },
  {
    title: 'TODO',
    path: '/todo',
  },
  {
    title: 'SWAPI',
    path: '/swapi',
  },
];

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(prev => !prev);
  };

  return (
    <>
      <AppBar
        position="sticky"
        elevation={0}
        sx={{
          backgroundColor: 'rgba(15, 17, 21, 0.85)',
          backdropFilter: 'blur(10px)',
          borderBottom: '1px solid rgba(255,255,255,0.08)',
        }}
      >
        <Container maxWidth="lg">
          <Toolbar disableGutters sx={{ minHeight: 72 }}>
            {/* Logo */}
            <Box
              component={NavLink}
              to="/"
              sx={{
                display: 'flex',
                alignItems: 'center',
                gap: 1,
                color: 'inherit',
                textDecoration: 'none',
                flexGrow: 1,
              }}
            >
              <CodeIcon color="primary" />

              <Typography
                variant="h6"
                sx={{
                  fontWeight: 800,
                  letterSpacing: '-0.5px',
                }}
              >
                S.O Studio
              </Typography>
            </Box>

            {/* Desktop navigation */}
            <Box
              sx={{
                display: {
                  xs: 'none',
                  md: 'flex',
                },
                gap: 1,
              }}
            >
              {navigation.map(item => (
                <Button
                  key={item.path}
                  component={NavLink}
                  to={item.path}
                  sx={{
                    color: 'text.primary',
                    '&.active': {
                      color: 'primary.main',
                    },
                  }}
                >
                  {item.title}
                </Button>
              ))}
            </Box>

            {/* Mobile button */}
            <IconButton
              color="inherit"
              onClick={handleDrawerToggle}
              sx={{
                display: {
                  xs: 'flex',
                  md: 'none',
                },
              }}
            >
              <MenuIcon />
            </IconButton>
          </Toolbar>
        </Container>
      </AppBar>

      {/* Mobile drawer */}
      <Drawer anchor="right" open={mobileOpen} onClose={handleDrawerToggle}>
        <Box
          sx={{
            width: 260,
            pt: 2,
          }}
        >
          <List>
            {navigation.map(item => (
              <ListItem key={item.path} disablePadding>
                <ListItemButton
                  component={NavLink}
                  to={item.path}
                  onClick={handleDrawerToggle}
                  sx={{
                    '&.active': {
                      color: 'primary.main',
                    },
                  }}
                >
                  <ListItemText primary={item.title} />
                </ListItemButton>
              </ListItem>
            ))}
          </List>
        </Box>
      </Drawer>
    </>
  );
}
