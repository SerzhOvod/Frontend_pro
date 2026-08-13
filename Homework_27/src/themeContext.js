import { createContext } from 'react';

export const themes = {
  light: {
    color: 'white',
    background: '#66deb2',
  },
  dark: {
    color: 'green',
    background: '#19513c',
  },
};

export const ThemeContext = createContext();
