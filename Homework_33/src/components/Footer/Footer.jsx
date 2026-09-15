import React from 'react';
import { useSelector } from 'react-redux';

export function Footer() {
  const count = useSelector(state => state.todos.items.length);

  return <div className="footer">Всього: {count}</div>;
}
