import React from 'react';

export default function ResponseContainer({ loading, error, data }) {
  return (
    <div className="response-container">
      {loading && <div style={{ color: '#6c757d' }}>Завантаження даних...</div>}

      {error && <div style={{ color: '#dc3545' }}>Помилка запиту: {error}</div>}

      {!loading && !error && data && (
        <pre style={{ margin: 0 }}>{JSON.stringify(data, null, 2)}</pre>
      )}

      {!loading && !error && !data && (
        <span style={{ color: '#adb5bd' }}>
          Дані відсутні. Натисніть "Get info".
        </span>
      )}
    </div>
  );
}
