import React from 'react';
import ButtonGetInfo from './ButtonGetInfo';
import Badge from './Badge';
import ResponseContainer from './ResponseContainer';

export default function MainContent({
  searchUrl,
  loading,
  data,
  error,
  onUrlChange,
  onGetInfo,
  onClearData,
}) {
  const handleSubmit = e => {
    e.preventDefault();
    onGetInfo();
  };

  return (
    <main className="main-content">
      <form className="request-bar" onSubmit={handleSubmit}>
        <input
          type="text"
          className="api-url-input"
          value={searchUrl}
          onChange={onUrlChange}
          placeholder="Введіть URL запиту"
        />
        <ButtonGetInfo disabled={loading} />
      </form>

      {data && !error && <Badge searchUrl={searchUrl} onClear={onClearData} />}

      <ResponseContainer loading={loading} error={error} data={data} />
    </main>
  );
}
