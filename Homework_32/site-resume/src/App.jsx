import { Routes, Route } from 'react-router-dom';

import Layout from './components/Layout/Layout';
import Home from './pages/Home/Home';
import Todo from './pages/Todo/Todo';
import Swapi from './pages/Swapi/Swapi';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="todo" element={<Todo />} />
        <Route path="swapi" element={<Swapi />} />
      </Route>
    </Routes>
  );
}

export default App;
