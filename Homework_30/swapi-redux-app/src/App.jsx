import React from 'react';
import useSwapi from './hooks/useSwapi';

import MainContent from './components/MainContent';
import ButtonClear from './components/ButtonClear';
import './index.css';

export default function App() {
  const {
    data,
    loading,
    error,
    searchUrl,
    handleGetInfo,
    handleClearData,
    handleUrlChange,
  } = useSwapi();

  return (
    <div className="app-container">
      <header className="app-header">
        <h1>SWAPI</h1>
      </header>

      <MainContent
        searchUrl={searchUrl}
        loading={loading}
        data={data}
        error={error}
        onUrlChange={e => handleUrlChange(e.target.value)}
        onGetInfo={handleGetInfo}
        onClearData={handleClearData}
      />

      <footer className="app-footer">
        <ButtonClear onClick={handleClearData} />
      </footer>
    </div>
  );
}
