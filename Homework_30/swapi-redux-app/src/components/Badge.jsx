import React from 'react';

export default function Badge({ searchUrl, onClear }) {
  const urlParts = searchUrl.split('/').filter(Boolean);
  const id = urlParts[urlParts.length - 1]; //
  const entity = urlParts[urlParts.length - 2];

  const hasValidId = id && !isNaN(id);

  if (!hasValidId) return null;

  return (
    <div className="dynamic-badge-container">
      <span className="entity-text">{entity}</span>
      <span className="entity-id-badge"> {id}</span>
    </div>
  );
}
