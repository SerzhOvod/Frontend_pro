import { useState } from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Header } from './components/Header/Header';
import { useTasks } from './hooks/custom-hooks';
import { Main } from './components/pages/Main';
import { Contacts } from './components/pages/Contacts';
import { About } from './components/pages/About';
import { NotFound } from './components/pages/NotFound';
import ErrorBoundary from './components/ErrorBoundary/ErrorBoundary';
import { ThemeContext, themes } from './themeContext';

function App() {
  const theme = useState(themes.light);

  return (
    <ThemeContext.Provider value={theme}>
      <div className="content" style={{ background: theme[0].background }}>
        <div className="container">
          <BrowserRouter>
            <Header />
            <ErrorBoundary>
              <Routes>
                <Route path="/" element={<Main />} />
                <Route path="/contacts" element={<Contacts />} />
                <Route path="/about" element={<About />} />
                <Route path="*" element={<NotFound />} />
              </Routes>
            </ErrorBoundary>
          </BrowserRouter>
        </div>
      </div>
    </ThemeContext.Provider>
  );
}

export default App;
